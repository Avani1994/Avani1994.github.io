document.write(`
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Optimizing serving/uploading of images at Quizziz</h4>
      </div>
      <div class="modal-body">
      <h2>
        The problem
      </h2>
        <p>
          To create a image upload/download server. It should be
          1. Fast and take the load off the main server.
          2. Should be able to handle all kinds of images(JPEG, PNG, GIF, SVG etc.).
          3. Should be served from the subdomain of the site.
          4. The images served should be available in various sizes according to devices(mobile/pad/web)
        </p>
      <h2>
        The solution
      </h2>
      <p>
        The server was running as a Google App Engine Application. This took out the task of maintaining and scaling the server.
        <br>
        <h3> Uploading </h3>
        To upload the image, the process was to request the server for a signed URL. This signed URL consists of a URL to callback when the image has finished uploading. The server then returns this URL and then the client 
        directly uploads the image to Google Cloud Storage.
        Hence no load is put on the server while uploading the image.
        As soon as the image has uploaded the callback URL is called. Here it is checked what was the image type. Since google's Image API doesn't consider SVG as a image(Why google? WHY?) a message is published on the Google Pub/Sub to convert the image. Even iOS doesn't support displaying SVG's(Why Apply? WHY?), so that's another reason.
        Also EXIF images need to be properly oriented and converted into JPEG otherwise some or the other client is definitely going to screw up and show them rotated.
        <h4> Architecture </h4>
        <img id="imageServerArch" src="images/image-server.png">
        <h4>Client</h4>
        <pre><code>
$.ajax({
      type: 'POST',
      url: SERVER_URL?desitination=folder_name,
      ContentType: 'application/json',
      success: function (url) {
          // var blob = dataURLtoBlob (dataURI);
          // var fd = new FormData();
          // debugger
          var xhr = new XMLHttpRequest ();
          var fd = new FormData();

          fd.append ('file', file);

          xhr.open('POST', url, true);
          xhr.send (fd);

          xhr.onload = function () {
            // The final URL is in here
              renderTheImage(xhr.responseText);
          }
      }
  })
          </code></pre>
          <h4> Server </h4>
           <pre><code>
class GetUploadURL(webapp2.RequestHandler):
    def post(self):
        try:
            destination = self.request.get('destination')
            uploadingPath = BUCKET_NAME + '/' + destination
            upload_url = blobstore.create_upload_url("/media/uploadCallback", max_bytes_per_blob=None, max_bytes_total=None, rpc=None, gs_bucket_name=uploadingPath)
            self.response.headers.add_header("Access-Control-Allow-Origin", "*")
            self.response.write(upload_url)
            return
        except Exception as e:
            log('UPLOAD_URL_NOT_GENERATED', e, self.request.params)
            self.error(500)

class UploadCallback(blobstore_handlers.BlobstoreUploadHandler):
    def post(self):
        try:
            fileInfo = self.get_file_infos()[0]
            # Just a way of getting 'folder/dog.gif' from 'gs/bucket-name/folder/dog.gif'
            objectPath = fileInfo.gs_object_name[4:]
            objectPath = objectPath[objectPath.index('/') + 1:]
            contentType = fileInfo.content_type
            if not contentType.startswith('image'):
                log('NOT_A_VALID_IMAGE', '', objectPath, 'INFO')
                self.error(400)
            // Posting the message to the server to convert the image.
            endpoint = None
            if contentType == 'image/svg+xml':
                endpoint = 'svgHandler'
            if contentType == 'image/jpeg':
                endpoint = 'jpegHandler'
            if endpoint:
                data = {
                    'endpoint': endpoint,
                    'data': {
                        'path': objectPath,
                    },
                }
                topic.publish(json.dumps(data))
            self.response.headers.add_header("Access-Control-Allow-Origin", "*")
            self.response.write(MEDIA_SERVER + fileInfo.gs_object_name)
        except Exception as e:
            log('CALLBACK_NOT_WORKING', e, self.request.params)
            self.error(500)
            </code></pre>
            <h4> Workers </h4>
            <pre><code>
const JPEG_OPTIONS = {
  resumable: false,
  validation: 'crc32c',
  metadata: {
    contentType: 'image/jpeg',
  },
};
function checkEXIF(objectPath) {
  const validOrientations = ['TopLeft', 'TopRight', 'BottomRight', 'BottomLeft', 'LeftTop', 'RightTop', 'RightBottom', 'LeftBottom'];
  return new Promise((resolve, reject) => {
    gm(objectPath)
    .orientation((e, value) => {
      if (e) {
        reject(e);
      }
      if (_.indexOf(validOrientations, value) >= 0) {
        resolve(true);
      }
      resolve(false);
    });
  });
}
function jpegHandler(message) {
  const source = message.path;
  const file = storage.getFile(message.path);
  const ws = file.createWriteStream(JPEG_OPTIONS);
  const destination = "images/" + message.path.substring(message.path.indexOf('/') + 1);
  return co(function* svgHandlerHelper() {
    // Download questions/hello to images/hello
    yield storage.downloadFile(source, destination);
    try {
      yield new Promise((resolve, reject) => {
        checkEXIF(destination)
        .then((isEXIF) => {
          if (isEXIF) {
            gm(destination)
            .autoOrient()
            .noProfile()
            .stream()
            .on('error', (err) => {
              reject(err);
            })
            .pipe(ws)
            .on('error', (err) => {
              reject(err);
            })
            .on('finish', (info) => {
              resolve(info);
            });
          } else {
            resolve('File is not in EXIF');
          }
        })
        .catch(reject);
      });
    } catch (err) {
      throw new QError(message, QError.Types.IMAGE_ERROR, err);
    } finally {
      return yield deleteFiles(destination);
    }
  });
}
const PNG_OPTIONS = {
  resumable: false,
  validation: 'crc32c',
  metadata: {
    contentType: 'image/png',
  },
};
function svgHandler(message) {
  const source = message.path;
  // const file = storage.getFile(message.path);
  // const ws = file.createWriteStream(JPEG_OPTIONS);
  const destination = "images/" + message.path.substring(message.path.indexOf('/') + 1);
  return co(function* svgHandlerHelper() {
    // Download questions/hello to images/hello.svg
    yield storage.downloadFile(source, destination + ".svg");
    try {
      yield new Promise((resolve, reject) => {
        sharp(destination + ".svg")
        .on('error', (err) => {
          reject(err);
        })
        .png()
        .on('error', (err) => {
          reject(err);
        })
        .toFile(destination + ".svg", (err, info) => {
          if (err) {
            reject(err);
          }
          resolve(info);
        });
      });
      PNG_OPTIONS.destination = source;
      yield storage.uploadFile(destination + ".svg", PNG_OPTIONS);
    } catch (err) {
      throw new QError(message, QError.Types.IMAGE_ERROR, err);
    } finally {
      return yield deleteFiles(destination);
    }
  });
}

  </code></pre>

  <h3> Downloading </h3>
  For this a beautiful solution was available. Google gives a direct image URL to serve content from Google Cloud Storage. But the problem with it is that it will be served from a domain like gh3.googlehostedcontent.com/... But it was desired that the content should be served from our domain.
  So we had to make a proxy server. The server gets the path of the image then creates the "magic" serving URL for the image. Now this image is downloaded in the required dimension and then returned to the client.
  As a optimization to this, the image is saved in Memchache for 15 mins. So if the same image is requested in quick sucsession, it won't be downloaded each time.

  <h4> Server </h4>
  <pre><code>
class Resource(blobstore_handlers.BlobstoreDownloadHandler):
    def get(self, path):
        try:
            self.response.headers.add_header("Access-Control-Allow-Origin", "*")
            self.response.headers['Cache-Control'] = 'public, max-age=1296000'

            if (path.find('questions') > -1):
                # Image requested will be used in game
                result = mcc.get(path)
                if result:
                    self.response.headers['Content-Type'] = result['contentType']
                    self.response.md5_etag()
                    self.response.write(result['content'])
                    return

            w = self.request.get('w')
            h = self.request.get('h')
            s = 0
            if w != '':
                w = int(w)
                s = w
            if h != '':
                h = int(h)
                s = max(s,h)
            try:
                magicURL = images.get_serving_url(None, filename=path) + '=s' + str(s) + '-v1'
            except Exception as e:
                log('NOT_IMAGE_TYPE', e, path, 'ERROR')
                self.response.headers['Cache-Control'] = 'public, max-age=300'
                self.response.md5_etag()
                self.send_blob(blobstore.create_gs_key(path))
                return
            try:
                result = urlfetch.fetch(magicURL)
                if result.status_code == 200:
                    if (path.find('questions') > -1):
                        mcc.set(path, {
                            'contentType': result.headers['Content-Type'],
                            'content': result.content
                        }, time=600)
                    self.response.headers['Content-Type'] = result.headers['Content-Type']
                    self.response.md5_etag()
                    self.response.write(result.content)
                else:
                    log('WRONG_URL', 'urlfetch not working', {'path':path, 'url': magicURL})
                    self.response.headers['Cache-Control'] = 'public, max-age=300'
                    self.response.md5_etag()
                    self.send_blob(blobstore.create_gs_key(path))
            except Exception as e:
                log('NOT_IMAGE_TYPE/TIMEOUT', e, path, 'ERROR')
                self.response.headers['Cache-Control'] = 'public, max-age=300'
                self.response.md5_etag()
                self.send_blob(blobstore.create_gs_key(path))
                return
        except Exception as e:
            log('CANT_FETCH', e, {'path':path})
            self.error(500)
            return
            </code></pre>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)