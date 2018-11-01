/*Object by literals */

emp = {id:101,name:"Shashank Patil",salary:10000,age:27,dob:"15-01-1991"}

console.log(emp.id + " " +emp.name + " " + emp.salary + " " + emp.dob);

/*instance of object */

var emp=new Object();  
emp.id=101;  
emp.name="Shahshank Patil";  
emp.salary=50000;  
console.log(emp.id + " " +emp.name + " " + emp.salary);

/*object constructure */

function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
    }  
    e=new emp(101,"Shashank Patil",10000);  
      
    console.log(e.id+" "+e.name+" "+e.salary);  

    /*methods in JS add property in the function with same name as method. */

    function emp(id,name,salary){  
        this.id=id;  
        this.name=name;  
        this.salary=salary;  
          
        this.changeSalary=changeSalary;  
        function changeSalary(otherSalary){  
        this.salary=otherSalary;  
        }  
        }  
        e=new emp(103,"Sonoo Jaiswal",30000);  
        console.log(e.id+" "+e.name+" "+e.salary);  
        e.changeSalary(45000);  
        console.log("<br>"+e.id+" "+e.name+" "+e.salary);  