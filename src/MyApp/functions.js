const obj = {
    m: function(a, b) {
        const x = 2;
        const y = 3;
        sample();
    }
}

function sample() {
    console.log("hello", this);
}

sample();

//console.log('hello ', obj.m(2,3));

function sample1() {
    const x = 2;
    const y = 3;
    function sample2() {
        console.log('x sample is ', x, 'y is ', y);
    }
    sample2();
}

sample2();

// default 
function sample2(x,y,z=3) {

}

// rest parameteres
function sample3(x,y,...rest){
    console.log('rest', x, y,rest);
}

//sample3(1,2,3,4,5,6);

function square(x) {
    console.log(x*x);
}

const myVar = square;
myVar(6)



function objFunc () {
    console.log('this ', this);
    objFunc.counter += 1;
    console.log('am called');
    // return
}

objFunc.counter = 0;

objFunc();
objFunc();
console.log(objFunc.counter);

// closures




//sample1();


let scope = "global scope";
function checkScope() {
    let scope = "local scope";
    function f() {
        return scope;
    }
    return f;
}

checkScope()();

// indirect invocation methods
// 1. call
//2. apply

function indirectInvocation1
 (a,b) {
    console.log('x is ', this.x);
    console.log('y is ', this.y);
    console.log('a is ', a);
    console.log('b is ', b);
}
const obj1 = {
    x: 1,
    y: 2,
    indirectInvocation2: () => {
        console.log("hi");
    }
}

const obj2 = {
    x: 3,
    y:4
}

//indirectInvocation1.call(obj1, 3,4);
//indirectInvocation1.apply(obj1, [3,4])
//obj1.indirectInvocation2(); 

// bind
const newIndirectInvocation1 = indirectInvocation1.bind(obj1);
newIndirectInvocation1(3,4);

let sum = (x,y) => x+y;
let succ = sum.bind(null, 1,2);
succ();

function f(y,z) {
    return this.x + y + z;
}
let g = f.bind({x:1}, 2);
g(3)

//Higher order functions
//function which takes one or more  functions as arguments, and returns a new function

function not(f) {
    return function(args) {
        let result = f(args);
        return !result;
    }
}

const even = x => x%2 === 0;
const odd = not(even);
console.log('am hof', [1,1,3,5,5].every(odd));

