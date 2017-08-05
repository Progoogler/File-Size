// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  
  
  function performClick(elemId) {
   var elem = document.getElementById(elemId);
   if(elem && document.createEvent) {
      var evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, false);
      elem.dispatchEvent(evt);
   }
  }
  
  $('form').submit(function(event) {
    event.preventDefault();
    var file = document.getElementById('theFile');
    $('#dreams').html("<p>{ size: " + file.files[0].size + " bytes }</p>");
  });

});
