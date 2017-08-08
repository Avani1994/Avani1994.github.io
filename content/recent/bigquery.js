document.write(`
<div id="myModal5" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">BigQuery to the rescue</h4>
      </div>
      <div class="modal-body">
      <h2> The Problem </h2>
      We needed a place to analyze and visualize all data. But doing the join and aggregate queried on mongo was a real pain. And even a query on a non-indexed field would take hours to run. 
      <h2> The Solution </h2>
      This was the best time to go old school. And Google had yet another awesome tool for this. Bigquery is the SQL database fully managed by google.
      It was really a great tools to start with. Only a few knobs need to be turned to get started.
      Soon all the data was being sent to BigQuery. Writing Standard SQL queries became a no brainer for us.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)