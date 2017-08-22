document.write(`
<div id="g-ml1" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Predicting which Author wrote particular review.</h4>
      </div>
      <div class="modal-body">
      Author Attribution is the task of predicting which author has written particular article. 
      So for this task we used amazon commerce review dataset. 
      Each Author's text can be represented using features which determine his her writing style. 
      In this dataset there were 10000 features and 1500 instances. 
      Since Dimensionality was huge and instances were too less, data was unrepresented. After reading several research papers, we reduced the dimensionality to 50 features using chi-square test in scikit - learn. 
      After that we used Multi Class classifiers, one vs one and one vs all for svm and achieved accuracy of around 95 %. 
      We were loosing 5%, because still there were some classes which couldn't be separated. This resulted in decrease of accuarcy. 
      As whole I learnt various issues in this project:Multi- Class Classification, Dimensionality Reduction, Importance of Features etc. 
      <a href='' target="_blank"> here </a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)