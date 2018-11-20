/*template based not class based we don't create class to get the object. But, we direct create objects.*/ 

/*by using literals*/

emp = {id:101,name:"shashank Patil",age:27,salary:50000}
console.log(emp.id+" "+emp.name+" "+emp.age+" "+emp.salary);

/* by instance of object*/

var emp2 = new Object();

emp2.id=103;
emp2.name="Shivam";
emp2.salary=200000;

console.log(emp2.id+" "+emp2.name+" "+emp.salary);

/*by object constructor*/

function emp3(id,name,salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

e = new emp3(104,"vimal",200000);

console.log(e.id+" "+e.name+" "+e.salary);

/*Methods in JavaScripts
A function is a piece of code that is called by name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value). All data that is passed to a function is explicitly passed.

A method is a piece of code that is called by a name that is associated with an object. In most respects it is identical to a function except for two key differences:

A method is implicitly passed the object on which it was called.
A method is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data).
*/

function emp4(id,name,salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;

    this.changesalary = changesalary;
    function changesalary(othersalary) {
        this.salary=othersalary;
    }
}

e = new emp4(105,"Vinayak",30000);
console.log(e.id+" "+e.name+" "+e.salary);

e.changesalary(45000);

console.log(e.id+" "+e.name+" "+e.salary);