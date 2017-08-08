document.write(`
<div id="myModal7" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">The Processing Foundation</h4>
      </div>
      <div class="modal-body">
        <h2> The Problem </h2>
        To implement the following features in NetLogo.

        <h2> The Solution </h2>
        Contribution Manager UI upgrade by <a href="https://github.com/Akarshit">Akarshit Wal</a>, mentored by <a href="https://github.com/alignedleft">Scott Murray</a>
        The aim of the project was to develop an easy to use UI for the libraries installation manager in Processing. The front-end of the previous Contribution Manager is significantly changed and the changed structure is linked to the back-end code. The previous version used to make separate JComponents for every contibution and then arrange them in a layout and display it to the user. This causes a significant lag even with multi-threading. This structure is changed to use a JTable now, which is much faster than the previous version and can easily provide more functionality like sorting, movement of the columns, etc.
        <p>Contribution Manager is a tool which lets uers install/upgrade/remove various libraries and other contributions. The aim of the project was to change UI of the Contribution Manager and make it more user-friendly. The Contribution Manager looks like this now -<br>
        <img src="http://i.imgur.com/TuEATTb.png" alt="Contribution Manager"><br>
        There are icons indicating the status of every contribution in the first column of the list.
        There is separate tab showing contributions which need upgradation.<br>
        <img src="http://i.imgur.com/2kIC0EJ.png" alt="Updates tab"><br>
        User can also search contributions based on a filter.<br>
        <img src="http://i.imgur.com/zmcpaI3.png" alt="Filter">  </p>
        <p>Another small part of the project was to test all the libraries and their examples to check their compatibility with Processing 3.0 and collect data about what is missing in them.</p>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)