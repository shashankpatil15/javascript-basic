/*Assign method in js
The Object.assign() method is used to copy the values of all 
enumerable own properties from one or more source objects to a target object.
*/

const object1 ={a:1, b:2, c:3};
const object2 = {g:1, h:2, i:3};

const object3 = Object.assign({c:4,d:5}, object1);
const object4 = Object.assign({g:34,h:25}, object2);

console.log(object3.c,object3.d);
console.log(object4.g, object4.h);

// Create Object
/* The Object.create() method is used to create a new object with the specified prototype object and properties */

const people = {
    printIntroduction : function () {
        console.log(this.name + " "+this.isHuman);
    }
};

const me = Object.create(people);
me.name = "Shashank";
me.isHuman = true;
me.printIntroduction();


/* Object define Properties 
The Object.defineProperties() method defines new or 
modifies existing properties directly on an object, and returning the object.
*/

const object6 = {};
Object.defineProperties(object6, {
    property1:{
        value:44,
    }
});
console.log(object6.property1);


const obj = {};  
Object.defineProperties(obj, {  
  property2: {  
    value: 142,  
    value: 422,  
    value: 423,  
    },  
  property3: {  
  value: 22,  
  value: 12,}  
});  
console.log(obj.property2,obj.property3);  

/*The Object.defineProperty() method defines a new property directly on an object and 
returns the object. To change the flags, we can use Object.defineProperty.
 We cannot change it back, because define property doesn?t work on non-configurable properties.*/

 const object7 = {};  
Object.defineProperty(object7, 'property3', {  
  value: 42,  
  value: 52,  
  value: 542,  
  });  
object7.property3 = 177;  
// throws an error in strict mode  
console.log(object7.property3);

const object8 = {};  
Object.defineProperty(object8, 'property4', {  
    
  value: 2,  
  value: 4,  
  value: 4+13,  
  });  
object8.property4 ;  
console.log(object8.property4); 

/* JavaScript Object.entries() 
method is used to return an array of a given object's own enumerable property [key, value] pairs.*/

const obje = { 10: 'arry', 21: 'barry', 23: 'carry' };  
console.log(Object.entries(obje)[2]);  

// creating an object constructor.  
  // and assigning values to it.   
  const obje2 = { 10: 'arvind', 2: 'rahul', 7: 'Ankit' };  
  
  // Displaying the countable property [key, value]   
 // pairs of the object using object.entries() method.   
console.log(Object.entries(obje2)[2]); 

/* The Object.freeze() method freezes an object that prevents new properties from being added to it.
This method prevents the modification of existing property, attributes, and values.*/

const object9 = {  
    property5: 22  
  };  
  const object10 = Object.freeze(object9);  
  object10.property5 = 33;  
  // Throws an error in strict mode  
  console.log(object9.property5); 

  /* configurable
true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
Defaults to false.
enumerable
true if and only if this property shows up during enumeration of the properties on the corresponding object.
Defaults to false.
A data descriptor also has the following optional keys:

value
The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).
Defaults to undefined.
writable
true if and only if the value associated with the property may be changed with an assignment operator.
Defaults to false.
An accessor descriptor also has the following optional keys:

get
A function which serves as a getter for the property, or undefined if there is no getter. When the property is accessed, this function is called without arguments and with this set to the object through which the property is accessed (this may not be the object on which the property is defined due to inheritance). The return value will be used as the value of the property.
Defaults to undefined.
set
A function which serves as a setter for the property, or undefined if there is no setter. When the property is assigned to, this function is called with one argument (the value being assigned to the property) and with this set to the object through which the property is assigned.
Defaults to undefined. */

const object11 = {  
    property1: 42  
  }  
  const object12 = {  
    property2: 34  
  }  
  const descriptor1 = Object.getOwnPropertyDescriptor(object11, 'property1');  
  const descriptor2 = Object.getOwnPropertyDescriptor(object12, 'property2');  
  const descriptor3 = Object.getOwnPropertyDescriptor(object11, 'property1');  
  const descriptor4 = Object.getOwnPropertyDescriptor(object11, 'property1');  
  console.log(descriptor1.enumerable);  
  console.log(descriptor2.enumerable); 
  console.log(descriptor3.configurable); 
  console.log(descriptor4.writable);  
  console.log(descriptor1.value);  
  console.log(descriptor2.value);
  console.log(descriptor3.value);
  console.log(descriptor4.value);  

  /* The Object.getOwnPropertyNames() method returns an array of all properties 
  (except those non-enumerable properties which use symbol) found directly upon a given object.*/

  const object13 = {  
    a: 0,  
    b: 1,  
    c: 2,  
  };  
  console.log(Object.getOwnPropertyNames(object13));  

  /*The Object.values() returns an array which contains the given object's 
  own enumerable property values, in the same order as that provided by a for...in loop.*/

  