//strictMode - this can hold any type of value
//"use strict" 

const func = ()=>{
    console.log(this);
}
const obj = {

    "a": 1,
    "b" : 2,

     "f" : function(){
       const func1= ()=>{
        console.log("Inside obj" , this.a);
     }
     func1();
    },

    set setA(a){
        this.a = a;
    },

    get getA(){
        return this.a;
    }
}

obj.setA = 10;
console.log("getter", obj.getA);
const obj1 = {

    "a": 5,
    "b" : 2,

     "f" : func
}
const temp = Number(1);

function f(){
    console.log("This", this);
}
obj1.f();
obj.f();
//temp.f();

console.log(obj);

function getThis(){
    return this;
}

Number.prototype.myFunc = getThis;

console.log(typeof (1).myFunc());




//Non StrictMode - this can only refer to an object that can be a number, string datatypes

