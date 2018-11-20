/*to initialize and create an object. It is called when memory is allocated for an object.*/
/* The constructor keyword is used to declare a constructor method.
The class can contain one constructor method only.
JavaScript allows us to use parent class constructor through super keyword*/



/*super keyword*/

class CompanyName {
    constructor(){
        this.company = "SSP";
    }
}

class Employee extends CompanyName {
    constructor(id,name) {
        super();
        this.id=id;
        this.name=name;
    }
}

var emp = new Employee(101,"shashank");
console.log(emp);
console.log(emp.id+" "+emp.name+" "+emp.company);