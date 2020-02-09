document.querySelector("#getEmployee").addEventListener('click',loadEmployee);

function loadEmployee(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','employess.json',true);
    xhr.onload =function(){
        if(this.status===200){
            
           const employees= JSON.parse(this.responseText);
           let html="";
           employees.forEach(employees => {
            html+=`
                <tr>
                    <td>
                    ${employees.firstName}
                    </td>

                    <td>
                    ${employees.lastName}
                    </td>

                    <td>
                    ${employees.age}
                    </td>

                    <td>
                    ${employees.retired}
                    </td>
                </tr>`;
           });
            
            document.querySelector('#employees').innerHTML=html;
        }
    
    }
    xhr.send();
}