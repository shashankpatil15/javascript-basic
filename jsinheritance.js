/* is a mechanism that allows us to create new classes on the 
basis of already existing classes. It provides flexibility to the child class 
to reuse the methods and variables of a parent class.

The JavaScript extends keyword is used to create a child class on the basis
 of a parent class. It facilitates child class to acquire all the properties and behavior of its parent class.

Points to remember
1. It maintains an IS-A relationship.
2. The extends keyword is used in class expressions or class declarations.
3. Using extends keyword, we can acquire all the properties and behavior of 
the inbuilt object as well as custom classes.
4. We can also use a prototype-based approach to achieve inheritance. */

class Time extends Date {
    constructor() {
        super();
    }
}
var t = new Time();
console.log("Current date");
console.log(t.getDate()+ " " + t.getMonth()+" "+t.getYear()+" "+t.getFullYear());

// custome class

class Bike  
{  
  constructor()  
  {  
    this.company="Royal Enfield";  
  }  
}  
class Vehicle extends Bike {  
  constructor(name,price) {  
   super();  
    this.name=name;  
    this.price=price;  
  }   
}  
var v = new Vehicle("Classic","290000");  
console.log(v.company+" "+v.name+" "+v.price);  

