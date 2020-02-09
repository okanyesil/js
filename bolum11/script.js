// const first = () =>{
//     console.log('first');
//     second();
// }

// const second = () => {
//     setTimeout(()=>{
//         console.log('second');
//     },2000)
//     third();
// }

// const third = () => {
//     console.log('third');
// }

// first();
// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if(xhr.readyState===4){
//         if(xhr.status==200){
//             console.log(xhr.responseText);
//         }else{
//             console.log('kaynak bulunamadı');
//         }
        
//     }
// }
// xhr.onprogress= () =>{
//     console.log('on prograss');
// }
// xhr.open('GET','msg.txt',true);

// xhr.send();
/*
ready state: 
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is read

status :

200: ok
403: forbidden
404: not found

*/