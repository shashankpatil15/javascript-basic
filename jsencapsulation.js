/* It a process of binding the data (i.e. variables) with the functions 
acting on that data. It allows us to control the data and validate it. 
To achieve an encapsulation in JavaScript: -

1.Use var keyword to make data members private.
2.Use setter methods to set the data and getter methods to get that data.
3.The encapsulation allows us to handle an object using the following properties:

Read/Write - Here, we use setter methods to write the data and getter methods read that data.

Read Only - In this case, we use getter methods only.

Write Only - In this case, we use setter methods only. */

class student {
    constructor(){
        var name;
        var age;
        var marks; // validation part
    }
    getName() {
        return this.name
    }
    setName(name){
        this.name = name;
    }
    getAge() {
        return this.age
    }
    setAge(age) {
        this.age = age;
    }    
    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        if(marks<0 || marks>100){
            console.log("Invalid Marks");
        } else {
        this.marks = marks;
        }
    }
}
var stud = new student();
stud.setName("shashank");
stud.setAge(27);
stud.setMarks(90); // make comment for validation result of false part
stud.setMarks(112);
console.log(stud.getName()+" " +stud.getAge()+" "+stud.getMarks()+" "+stud.getMarks());

//prototype base approach 

function Student(name,marks)  
{  
  var s_name=name;  
  var s_marks=marks;  
  Object.defineProperty(this,"name",{  
    get:function()  
    {  
      return s_name;  
    },  
  set:function(s_name)  
  {  
    this.s_name=s_name;  
  }  
    
});  
   
    Object.defineProperty(this,"marks",{  
    get:function()  
    {  
      return s_marks;  
    },  
  set:function(s_marks)  
  {  
    this.s_marks=s_marks;  
  }  
    
});  
    
}  
  var stud=new Student("John",80);  
  console.log(stud.name+" "+stud.marks);