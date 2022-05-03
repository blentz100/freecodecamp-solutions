/*
Give Each Element a Unique id
We will also want to be able to use jQuery to target each button by its unique id.

Give each of your buttons a unique id, starting with target1 and ending with target6.

Make sure that target1 to target3 are in #left-well, and target4 to target6 are in #right-well.
*/ 


<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button id="target1" class="btn btn-default target"></button>
        <button id="target2" class="btn btn-default target"></button>
        <button id="target3" class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button id="target4" class="btn btn-default target"></button>
        <button id="target5" class="btn btn-default target"></button>
        <button id="target6" class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
