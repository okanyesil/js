//create object

let personProto = {
    calculateAge : function(){
        return 2020- this.yearOfBirth;
    }
}

let okan=Object.create(personProto);
okan.name='okan';
okan.yearOfBirth=1999;
okan.job='student';

//diğer bir yöntem

let mehmet=Object.create(personProto,({
    name:{value:'mehmet'},
    yearOfBirth:{value:1995},
    job:{value:'student'}
}))


console.log(mehmet);
console.log(mehmet.calculateAge());

console.log(okan.calculateAge());
console.log(okan);