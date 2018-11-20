/*The JavaScript class contains various class members within a body 
including methods or constructor. The class is executed in strict mode. 
So, the code containing the silent error or mistake throws an error.*/

class Employee {
    // Initialise the objects

    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    //Declaration method

    detail() {
        console.log(this.id+ " " +this.name);
    }
}
    //passing object to variable

    var emp = new Employee(101,"shashank");
    var emp2 = new Employee(102,"shivam");

    emp.detail();
    emp2.detail();
