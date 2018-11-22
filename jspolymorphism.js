/* The polymorphism is a core concept of an object-oriented paradigm that 
provides a way to perform a single action in different forms. It provides 
an ability to call the same method on different JavaScript objects. 
As JavaScript is not a type-safe language, we can pass any type of data members with the methods. */

class A {
    display() {
        console.log("A is invoked");
    }
}
class B extends A {

}
var obj = new B();
obj.display();

//same method of base and derived class

class C {
    dispaly1() {
        console.log("C is invoked");
    }    
}
class D  extends C{
    dispaly1() {
        console.log("D is invoked");
    }
}
var obj1 = [new C(), new D()];
obj1.forEach(function(msg){
    msg.dispaly1();
});

//