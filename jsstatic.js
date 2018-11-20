/*static methods that belong to the class instead of an instance of that class 
1.The static keyword is used to declare a static method.
2.The static method can be of any name.
3.A class can contain more than one static method.
4.If we declare more than one static method with a similar name, the JavaScript always invokes the last one.
5.The static method can be used to create utility functions.
6.We can use this keyword to call a static method within another static method.
7.We cannot use this keyword directly to call a static method within the non-static method. 
In such case, we can call the static method either using the class name or as the property of the constructor. */

class Test {
    static display() {
        console.log("This is static method");
    }
}
console.log(Test.display());

/*more than one methods*/

class Test1 {
    static display1() {
        return "this is first static"
    }
    static display2() {
        return "this is second static"
    }
}   
console.log(Test1.display1());
console.log(Test1.display2());

//more than one methods with similar name

class Test2 {
    static display3() {
        return "I am first"
    }
    static display3() {
        return "I am Second"
    }
}
console.log(Test2.display3());

// invoked in constructor

class Test3 {
    constructor() {
        console.log(Test3.display4());
    }

    static display4() {
        return "I am consturctor"
    }
}
var t = new Test3;

//static method in non-static method

class Test4 {
    static display5() {
        return "static method"
    }

    show() {
        console.log(Test4.display5());
    }
}

var t1 = new Test4();
t1.show();