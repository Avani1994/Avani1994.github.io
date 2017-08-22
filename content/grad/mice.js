document.write(`
<div id="g-tda1" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Using Mice temperature data to predict if mice is pregnant or not</h4>
      </div>
      <div class="modal-body">
      Here we dealt with mice temperature data from Psychology Department at University of California Berkeley . 
      The data is time series data of body temperature of mice, with readings taken every minute. 
      Using computational topology, we tried to predict whether individual mice were pregnant or not within hours after pairing. 
      Temperature has some peculiar variations within the first 12 hours from pairing if the pregnancy comes to term. 
      We tried to capture this pattern, which in turn helped improve early detection of pregnancy. 
      This will also help distinguishing with non-pregnant mice whose body temperature mostly is periodic and shows 4-day estrous cycle. 
      This can help making some interesting predictions about the biological processes in various species, just by analyzing the temperature data.
      <a href='https://github.com/Avani1994/Mice_Generate_Plot_Cocycles.git' target="_blank"> here </a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)