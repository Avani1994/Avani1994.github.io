document.write(`
<div id="g-nlp1" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Finding the coreferent of noun phrases</h4>
      </div>
      <div class="modal-body">
      Coreference Resolution is the task of finding, whether two or more expressions in a
      text base, refer to the same object or living entity. 
      We developed a system which took input as anaphora annotated corpus and returns its antecedants marks in the file. 
      For this particular task we used several passes, which passed the input file through several seives, such as string matching, abbravation matching, gender resolver, proper noun match, semantic match etc. 
      There were around 10 seives. 
      We achieved an accuarcy of around 61 % on both test and training sets. 
      We won best Poster Presentation award for this Project. <a href='https://github.com/Avani1994/Coreference_Resolution_NLP.git' target="_blank"> here </a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

`)