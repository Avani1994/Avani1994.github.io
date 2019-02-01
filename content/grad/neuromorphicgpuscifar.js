document.write(`
<div id="neuromorphic" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">A Study on the Communication-Accuracy Trade-offs in CNN Training</h4>
      </div>
      <div class="modal-body">
      We study training of a Convolutional Neural Network (CNN) for image classification task using 
      multiple Graphic Processing Units (GPUs). The objective of this work is to study the trade-off 
      between performance and accuracy while using multiple GPUs to train a CNN. We report the penalties 
      incurred while training on multiple GPUs and show results of reducing the communication between training 
      stages on the accuracy of the model generated. We demonstrate with results, how a typically 
      communication-bound CNN training process could be transformed to a computation-bound (hence, strongly scalable) 
      process at the expense of model accuracy, within tolerable accuracy limits. 
      <a href='' target="_blank"> here </a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

`)