//aldığı maaşa göre verdiği vergiyi hesaplayan bir uygulama
let Employee=function(name,salary){

    if(!this instanceof Employee){
        return new Employee(name,salary);
    }
    this.name=name;
    this.salary=salary;
}

Employee.prototype.calculateSalary=function(){
    var month=new Date().getMonth()+1;
    var tax=0;
    var total=month*this.salary;
    
    if(total<=20000){
        tax=total*0.2;
    }
    else if(total >20000 && total <=30000){
        tax=total*0.25;
    }
    else{
        tax=total*0.3;
    }
    return {
        tax:tax,
        paid: total-tax
    }
} 
var emp1=new Employee('okan',4000);
console.log(emp1);
console.log(emp1.calculateSalary());

