document.write(`
<div id="personal-proxyhelper" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">BigQuery to the rescue</h4>
      </div>
      <div class="modal-body">
      <h2> The Problem </h2>
      <ol>
        <li> It's a real pain to check which wi-fi is working and which is not. Also we are always skeptical if we are connected to the fastest network that is available. Out of the available proxy which proxy is the fastes </li>
        <li> When one is behind proxy server, many application stop working as they need a direct connection.</li>
        <li> When tor is used proxy setting have to be changed, this becomes very irritating very quickly.</li>
      </ol>
      <h2> The Solution </h2>
      The script is written in python and can be installed as a linux command.
      <ol>
        <li> The script runs in the background and then connects to all the networks/proxy and pings them. From the results obtained the fastest proxy/network is chosen and the system is connected to that network.</li>
        <li> The system uses the proxychain to automatically execute all the commands that won't work without chaining the proxy. To determine which commands won't work without proxy a list is precalculated form the most used commands on linux.</li>
        <li> The script determines if the system is connected to the network via tor or not. And then the script sets up the network proxy accordingly. Since the script needs to set up these settings, sudo access is required. 
        The first time the command is installed, it request for permission so that is can execute sudo commands later on.
      </ol>
      The repository is can be found <a href='https://github.com/Nithmr/ProxyHelper'> here </a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)