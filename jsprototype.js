/*the objects to acquire properties and features from one another*/

/*function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.fullName=function()  
  {  
    return this.firstName+" "+this.lastName;  
  }  
  
var employee1=new Employee("Martin","Roy");  
var employee2=new Employee("Duke", "William");  
console.log(employee1.fullName()+"<br>");  
console.log(employee2.fullName()); */ 

// Second Example

function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.company="Javatpoint"  
  
var employee1=new Employee("Martin","Roy");  
var employee2=new Employee("Duke", "William");  
console.log(employee1.firstName+" "+employee1.lastName+" "+employee1.company+" ");  
console.log(employee2.firstName+" "+employee2.lastName+" "+employee2.company);