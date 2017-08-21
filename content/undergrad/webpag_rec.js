document.write(`
<div id="ug-webpage" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Room allotment for hostels</h4>
      </div>
      <div class="modal-body">
      <h2> The Problem </h2>
      Automate the system of room allotment for students
      <h2> The Solution </h2>
      Here, we have proposed a new hybrid web page recommendation system which uses content based filtering and collaborative filtering. 
      Firstly crawler is used to crawl web graph with initial seed, that is the first page target user (user for whom recommendations are to be given) visits. 
      Then content based filtering is used, which makes use of metadata of web page (generally keywords) to measure semantic similarity with the keywords of other page. 
      The web graph is then pruned according to predefined similarity threshold. Collaborative filtering is then used on pruned graph
      which is based on user's past browsing patterns, to find most similar users to the target user. 
      These users are then finally used to recommend new web pages to target user. 
      This technique results into a highly efficient web page recommendation system which filters the web graph twice and limits the search space to a large extent thus, making it easier to recommend relevant and qualitative web pages to the target user.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)