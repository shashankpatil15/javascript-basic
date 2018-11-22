// The call() and apply() method allows us to write a method that can be used on different objects

var emp_address = {  
    fullAddress: function() {  
        return this.company + " " + this.city+" "+this.state;  
    }  
}  
var address = {  
    company:"SSP",  
    city:"Pune",  
    state:"MH",  
  
}  
  
console.log(emp_address.fullAddress.call(address));   
console.log(emp_address.fullAddress.apply(address));