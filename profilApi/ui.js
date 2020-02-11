class UI{
    constructor(){
        this.profilContainer=document.querySelector('#profileContainer');
        this.alert=document.querySelector('#alert');
    }


    showProfile(profile){
        this.profilContainer.innerHTML=`
            <div class="card card-body>
                <div class="row>
                    <div class="col-md-3">
                        <img src="https://via.placeholder.com/150" class="img-thumbnail">

                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                            <ul class="list-group">
                                <li class="list-group-item">
                                   name: ${profile.name}
                                </li>
                                <li class="list-group-item">
                                   username: ${profile.username}
                                </li>
                                <li class="list-group-item">
                                   email: ${profile.email}
                                </li>
                                <li class="list-group-item">
                                    Adress: ${profile.address.street}
                                    ${profile.address.suite}
                                    ${profile.address.city}
                                </li>
                                <li class="list-group-item">
                                   email: ${profile.phone}
                                </li>
                                <li class="list-group-item">
                                email: ${profile.website}
                             </li>

                            </ul>
        
                    </div>
                </div>
            </div>
        `;
    }
    showAlert(text){
        this.alert.innerHTML=`${text} is not found.`;

    }
    clear(){
        this.profilContainer.innerHTML="";
        this.alert.innerHTML="";
    }
}