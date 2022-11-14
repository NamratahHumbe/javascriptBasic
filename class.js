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