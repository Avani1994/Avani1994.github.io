document.write(`
<div id="myModal3" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">RabbitMQ implementation</h4>
      </div>
      <div class="modal-body">
      <h2> The Problem </h2>
      The server handling the socket connection was not able to scale as it had to handle a lot of socket connections simultaneously.
      <h2> The Solution </h2>
      The server was split into two servers </br>
      1. This server handles the socket messages and just puts them in a RabbitMQ "request" queue and listen to the "reply" queue for responses. </br>
      2. This server's task is to listen to the "request" queue, pick up messages from the queue, process them and send them back to the reply queue. </br>
      <h3>Architecture</h3>
      <img src="images/rabbitMQArchi.png">
      <h3> Explanation </h3> 
      The socket server is a simple NodeJS application written using socket.io. Beacuse of using RabbitMQ the socket server is now free of all the computation. It's only job is to maintain connection with the client and interact with RabbitMQ.
      All the heavy load lifting is being done by the workers.
      This helped up to build a scalable architecture.
      </div>      
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)