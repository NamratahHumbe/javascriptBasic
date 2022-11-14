//let
let myname='Namrata';
console.log(myname);
myname='Pallavi'
console.log(myname);

//const
const name='Namrata';
console.log(myname);
//name='Pallavi'  //gives error
//console.log(myname);

//Arrow function
/*const square=(number)=>{
    return number**2;*/
const square=(number)=> number**2;
//}
console.log(square(4));

//
//Class
function makeEmployee(){
    class Employee{
        constructor(id,name,location){
            this.id=id;
            this.name= name;
            this.location=location;
        }
    }
    return Employee;
}
const Employee=makeEmployee();
const Namrata=new Employee(353,'Namrata','Pune');
console.log(Namrata.location);

//inheritance
class Human{
    constructor(){
        this.gender='male'
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(){
        super(); //to inherit properties
        this.name="Namrata";
        //this.gender="Female";
    }
    printMyName(){
        console.log(this.name)
    }
}

const person=new Person();
person.printMyName();
person.printGender();

