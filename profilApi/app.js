const ui = new UI();
const profile = new Profile();
const searchProfile=document.querySelector('#searchProfile');

searchProfile.addEventListener('keyup',(event)=>{
    ui.clear();
    let text=event.target.value;
    if(text!=='null'){
        profile.getProfile(text).then(res=>
            {
            if(res.profile.length===0){
                ui.showAlert(text);
            }else{
               ui.showProfile(res.profile[0]);
            }
             
        })
    }
})

