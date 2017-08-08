document.write(`
<div id="myModal6" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">The Processing Foundation</h4>
      </div>
      <div class="modal-body">
      <h2> The Problem </h2>
      To make a UI and backend support so that users of Processing can download the extensions and libraries made by the community.
      <h2> The Solution </h2>
      I had been contributing to Processing for almost a year then. Almost all of the code was in Java. The main challenge was to make the UI work on all the OS's and parallelization in Java. 
      At that time in Java 6 async was not there and parallelization in a huge code like that of Processing was not trivial to implement.
      My mentor Scott Murray was kind enough to make the designs and my job to implement them on using Swing. 
      For the backend I used vamilla thread for downloading multiple things parallely.
        <h4 id="project-details">Project Details</h4>
        <p><strong>Organization</strong> -The Center for Connected Learning and Computer-Based Modeling</p>
        <p><strong>Mentor</strong> - Robert Grider  </p>
        <p><strong>Student</strong> - Akarshit Wal</p>
        <h4 id="project-abstract">Project Abstract</h4>
        <p>The aim of the project was to add some features to the <a href="https://github.com/NetLogo/NetLogo">NetLogo</a> Desktop Editor. The features added are -</p>
        <h5 id="features-implemented">Features Implemented</h5>
        <h5 id="1-auto-completehttpsgithubcomnetlogonetlogopull1072">1. <a href="https://github.com/NetLogo/NetLogo/pull/1072">Auto Complete</a></h5>
        <p>This features adds a pop-up box to the editor as a user types a command or reporter. The user can simply choose the suggestion using the arrow keys or dismiss the pop-up. Some enhancements have also been made in the feature like</p>
        <ol>
        <li><a href="https://github.com/NetLogo/NetLogo/pull/1080">Elements can be chosen with mouse click</a>  </li>
        <li><a href="https://github.com/NetLogo/NetLogo/pull/1081">Integration with command center</a>   </li>
        <li><a href="https://github.com/NetLogo/NetLogo/pull/1093">Algorithm improvements</a></li>
        </ol>
        <p>The screenshots of the feature can be found below.</p>
        <p><img src="http://i.imgur.com/Zl2LIRe.png" alt="Imgur"></p>
        <h5 id="2-show-usagehttpsgithubcomnetlogonetlogopull1079">2. <a href="https://github.com/NetLogo/NetLogo/pull/1079">Show Usage</a></h5>
        <p>This adds a pop-up box to the editor which can be selected from the right click menu. The pop-up contains all the occurrence of the variable for which the <code>Show Usage</code> was invoked.
        Screenshots of the pop-up are attached below.</p>
        <h5 id="3-jump-to-declarationhttpsgithubcomnetlogonetlogopull1110">3. <a href="https://github.com/NetLogo/NetLogo/pull/1110">Jump To Declaration</a></h5>
        <p>This add a feature by which the user can directly jump to the place of declaration for a variable. The option can be easily selected from the right click menu.</p>
        <h5 id="4-undoredo-for-widgetshttpsgithubcomnetlogonetlogopull1088">4. <a href="https://github.com/NetLogo/NetLogo/pull/1088">Undo/Redo for widgets</a></h5>
        <p>The users can now undo/redo the addition/removal/resizing/movement of widget. The shortcuts for the undo/redo are same as that for normal text undo. The feature also remembers the selected/unselected state of the widget and supports easy editing of the widgets.</p>
        <h2> Testimonial </h2>
        Akarshit, you've done an excellent job this summer working for the CCL. Thanks so much for your contributions! I especially appreciated your willingness to start new tasks and enter new areas of the code. You did terrific work and I'm excited that we're getting to release it to our users. I was really glad to have your expertise in working with Swing and you employed several patterns I hadn't seen before which allowed the code to be flexible and even beautiful. I would encourage you to continue learning more about Scala and functional programming. I wish we had had more time this summer to spend working on improving your knowledge in these areas. You clearly have a terrific knowledge of the java ecosystem. Continue to build on that and I'm excited to see what you do in the future!
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)