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

//spred operator
const oldArray=[1,2,3,4,5];
const newArray=[...oldArray,6,7,8];
console.log(newArray);

//Rest Operator
//(filter function)
const filter=(...a)=>{
    return a.filter(el=>el===1);
}
console.log(filter(1,2,3,4));

//array destructuring
const num=[1,2,3,4,5];
[num1,,,num4,]=num;
console.log(num4);

//Refreshing array function
//(Map function)
const number=[1,2,3,4];
const doubleNum= num.map((num)=>num*2);
console.log(num);
console.log(doubleNum);

//(find function)
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);//return 1st value who satisfy condition

//(findIndex function)
const arr = [5, 12, 8, 130, 44];
const found1 = arr.findIndex(element => element > 10);
console.log(found1);

//(reduce function)
const arr1 = [1, 2, 3, 4];
const initialValue = 0;
const sum = arr1.reduce(
  (pre,current) => pre + current,
  initialValue
);
console.log(sum);

//(concat function)
const arry1 = ['a', 'b', 'c'];
const arry2 = ['d', 'e', 'f'];
const arry3 = arry1.concat(arry2);
console.log(arry3);

//(slice function)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//(splice function)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
