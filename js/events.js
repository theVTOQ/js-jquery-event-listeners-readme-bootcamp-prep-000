//define functions here
function getIt(){
  alert("Hey!");
}

function frameIt(){
  this.addClass("tasty");
}
$(document).ready(function(){

// call functions here
  $('p').on('click', getIt);
  $('img').on('load', frameIt);
});
