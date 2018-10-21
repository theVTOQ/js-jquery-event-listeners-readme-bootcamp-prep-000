//define functions here
function getIt(){
  alert("Hey!");
}

function frameIt(){
  $('img:last').addClass("tasty");
}
/*
function pressIt(key){
  if(key.which == 71){
    alert('G was pressed');
  }
}*/

function pressIt(){
  $('input').on('keydown', function(key){
    if(key.which == 71){
      alert('G was pressed');
    }
  });
}


function submitIt(){
  alert('Your form is going to be submitted now.')
}

$(document).ready(function(){

// call functions here
  $('p').on('click', getIt);
  $('img').on('load', frameIt);
  //$('form:input').on('keydown', pressIt(key));
  pressIt();
  $('form').on('submit', submitIt);
});
