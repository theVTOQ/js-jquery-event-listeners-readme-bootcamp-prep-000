//define functions here
function getIt(){
  alert("Hey!");
}

function frameIt(){
  this.addClass("tasty");


function pressIt(key){
  if(key.which == 71){
    alert('G was pressed');
  }
}
$(document).ready(function(){

// call functions here
  $('p').on('click', getIt);
  $('img').on('load', frameIt);
  $('form:input').on('keydown', pressIt)
});
