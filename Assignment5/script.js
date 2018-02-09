function knowledgeFunction() {
  var checkBox =document.getElementById("soMuch");
  var text = document.getElementById("horseTeach");
  if(checkBox.checked === true){
    text.style.display="block";
  }else{
    text.style.display="none";
  }
}

function knowledgeFunction2() {
  var checkBox =document.getElementById("Little");
  var text = document.getElementById("littleTeach");
  if(checkBox.checked === true){
    text.style.display="block";
  }else{
    text.style.display="none";
  }
}

function knowledgeFunction3() {
  var checkBox =document.getElementById("none");
  var text = document.getElementById("noneTeach");
  if(checkBox.checked === true){
    text.style.display="block";
  }else{
    text.style.display="none";
  }
}

function knowledgeFunction4() {
  var checkBox =document.getElementById("what");
  var text = document.getElementById("whatTeach");
  if(checkBox.checked === true){
    text.style.display="block";
  }else{
    text.style.display="none";
  }
}


function musicFunction() {
  var musicSelection = document.querySelector('input[name="music"]:checked').value
  console.log(musicSelection);
}

function myInput(){
  var text;
}