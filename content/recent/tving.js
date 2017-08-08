document.write(`
<div id="myModal8" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Backend on Google Cloud Platform</h4>
      </div>
      <div class="modal-body">
        <h2> The Problem </h2>
        To make the backend API's to support a Android application for TV schedule managaement.
        <h2> The Solution </h2>
        The backend was written in Java and deployed on Google's App Engine. For integrating the API's with the Android application, Google Cloud Endpoints were used.
        The code was written from scratch. Google App Engine was responsible for scaling of the application.
        Database used is Google Datastore with some libraries like objectify and lombok to make the development faster. The libraries used for the recommendation are Mahout and JBLAS and the platform used for this computation to take place is Google Compute Engine. Maven is used as the build tool and for library management. SVN, Git are used for project management and synchronization. Authentication was done using Shiro. Eclipse is the main IDE on which most of the development was done. I did this project under mentorship of Mr. Manu Bamba ( manu.bamba@gmail.com )
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)