//define functions here
function getIt(){
  alert("Hey!");
}

function frameIt(){
  this.addClass("tasty");


function pressIt(){
  if(key.which == 71){
    alert('G was pressed');
  }
}

function submitIt(){
  alert('Your form is going to be submitted now.')
}

$(document).ready(function(){

// call functions here
  $('p').on('click', getIt);
  $('img').on('load', frameIt);
  $('form:input').on('keydown', pressIt)
  $('form').on('submit', submitIt);
});
