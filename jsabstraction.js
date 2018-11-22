/*An abstraction is a way of hiding the
 implementation details and showing only the functionality to the users
 We cannot create an instance of Abstract Class.
It reduces the duplication of code.*/

//Creating a constructor function  
/*function Vehicle()  
{  
    this.vehicleName= vehicleName;  
    throw new Error("You cannot create an instance of Abstract class");  
  
}  
Vehicle.prototype.display=function()  
{  
    return this.vehicleName;  
}  
var vehicle=new Vehicle();*/

//by using instanceof operator for testing

//Creating a constructor function  
function Vehicle1()  
{  
    this.vehicleName1=vehicleName1;  
    throw new Error("You cannot create an instance of Abstract class");  
}  
//Creating a constructor function  
function Bike1(vehicleName1)  
{  
    this.vehicleName1=vehicleName1;  
}  
Bike.prototype=Object.create(Vehicle1.prototype);  
var bike1=new Bike("Honda");  
console.log(bike instanceof Vehicle);  
console.log(bike instanceof Bike); 

