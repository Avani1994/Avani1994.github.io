document.write(`
<div id="myModal4" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">RabbitMQ implementation</h4>
      </div>
      <div class="modal-body">
      <h2> The Problem </h2>
      To make the queries on databases superfast.
      <h2> The Solution </h2>
      If the data was only stored in MongoDB, the query time is in ms. This is OK for a individual calls but in a game this time is not acceptable.
      So the data was split between MongoDB and Redis. When a game is live all the data associated with it is kept in Redis and when the game is over, the data is moved from Redis to MongoDB.
      <h3>Architecture</h3>
      <img src="images/redisArchi.jpg">
      <h3> Explanation </h3> 
      Redis is a database which keeps all the data in memory. This causes some superfast response times. A get query gets executed in order of ns.</br>
      During the game the socket server is reponsible for all the communication with the client. As during the game all the data is stored in Redis, the Socket server only had to communicate with Redis which gives very less response time. </br>
      After the game has finished, the data is transferred from Redia to MongoDB. Now when this data has to be queried in the future, the request will come to API server and will be addresses by MongoDB.
      To make redis always available, a cluster of redis insatances is deployed. Each mater has 2 slaves.
      To make redis faster, sharding is done between 2 masters.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)