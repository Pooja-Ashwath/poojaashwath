"use strict"
const imp = require("./ModuleExports.js");

//console.log(imp.f(1,2));


const obj = {
    "a": 1,
    "b": 2,
    f: function (){
        this.a = 3;
    },

    set setA(a){
        this.a = a;
        return this.a;
    },


}

//Object.preventExtensions(obj);

//obj["c"] = 3;

// Object.setPrototypeOf(obj,{"e": 4});
//  obj.f();
// console.log("hi",obj);

//console.log(Object.isExtensible(obj));


//Object.seal(obj);

// obj["a"] = 5;
// //obj["e"] = 6;
// //delete obj["a"];


// console.log("hi", Object.isSealed(obj));

Object.freeze(obj);
obj.setA = 20;

// Object.defineProperty(obj, 'a',{
//     writable:true
// })


//obj.a = 6;

//obj["a"] = 5;
//obj["e"] = 5;

//delete obj["b"];

//obj.f();

console.log("hi",obj.a);



