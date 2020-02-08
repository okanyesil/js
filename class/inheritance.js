//js ile kalıtım yapma
let Person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}
Person.prototype.calculateAge=function(){
    return 2020-this.yearOfBirth;
}
//person call ile kalıtım sağlanır.
//.call methodunun kullanımı ise şöyledir.
//ilk değer bizim functionun referansı yani this ardından ise değişkenlerimizi yazarız.
let Teacher=function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job);
    this.subject=subject;
}


//inherit the person protype methods
Teacher.prototype=Object.create(Person.prototype);
//set teacher constructor
Teacher.prototype.constructor=Teacher;
console.log(Teacher.prototype.constructor);

let okan=new Teacher('okan',1999,'teacher','math');
console.log(okan);
console.log(okan.calculateAge());