//js'de class tanımlama function ile yapılır.
//örneğin ad doğum tarihi ve meslek bilgilerinin
//tutulduğu bir class yazalım.
//clasımızın adı Person olsun.
//ES5 e göre yapılmıştır.


// function Person(name,yearOfBirthday,job){
//     this.name=name;
//     this.yearOfBirthday=yearOfBirthday;
//     this.job=job;
// }
//ikinci yol olarak aşağıda ki şekilde de yapabiliriz.

let Person=function(name,yearOfBirthday,job){
    this.name=name;
    this.yearOfBirthday=yearOfBirthday;
    this.job=job;
}
//js'de kalıtım prototype ile yapılır.
//Kullanımı aşağıdaki gibidir.
//prototype ile oluştuğumuz nesneler ya da fonksiyonlar tüm instanceler için geçerlidir. Örneğin prototype ile lastName ataması yaptığımız zaman tüm instanceların lastName'i aynı olur.
Person.prototype.calculateAge=function(){
    return 2020-this.yearOfBirthday;
}
//clasımızı oluşturduk şimdi de bir instance oluşturalım.

Person.prototype.lastName='Yeşiloğlu';

let okan=new Person('okan',1999,'CE student');
let mehmet=new Person('mehmet',1995,'student');

console.log(okan);
console.log(okan.calculateAge());
console.log(okan.lastName);
console.log('**************');
console.log(mehmet);
console.log(mehmet.calculateAge());
console.log(mehmet.lastName);
//özelliklerin objeler arasında paylaşılmasına prototype denir.
