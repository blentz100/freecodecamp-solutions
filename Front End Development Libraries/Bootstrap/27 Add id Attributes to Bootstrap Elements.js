/*
Add id Attributes to Bootstrap Elements Recall that in addition to class
attributes, you can give each of your elements an id attribute.

Each id must be unique to a specific element and used only once per page.

Let's give a unique id to each of our div elements of class well.

Remember that you can give an element an id like this:

<div class="well" id="center-well"> Give the well on the left the id of
left-well. Give the well on the right the id of right-well.
*/  

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
