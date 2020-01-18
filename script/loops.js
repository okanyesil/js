function howMany(selectObject){
  let numberSelected=0;
  for(let i=0;i<selectObject.options.length;i++){
    if(selectObject.options[i].selected){
      numberSelected++;
    }
  }
  return numberSelected;
}

let btn=document.getElementById('btn');
btn.addEventListener('click',function(){
  alert('number of option selected:'+howMany(document.selectForm.musicTypes));
});