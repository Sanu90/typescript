// GENERICS //

import { log } from "console";

// When we have a function which may return
// any type which we are not sure of, we need
// to specify all the possible types in the
// argument list as well as for the return type.
// So to specify all of the possible types is not
// practically possible. So comes the generics function
// in ts.


// this is not practically possible

function print1(a:number|string|boolean):number|string|boolean{
    return a;
}

// console.log(print1(4))
// console.log(print1('hello'))
// console.log(print1(true))


//generics 1

function print2 <T> (value:T):T{
    return value;
}
// console.log(print2("string"));
// console.log(print2(100));
// console.log(print2(false));


//generics 2

// let result=<gen> (value:gen):boolean=>{
//     return typeof value === 'object'
// }

// console.log(result(10));
// console.log(result([8,6,0,9]));
// console.log(result(null));
// console.log(result({
//     'name':'hariprasad',
//     'job': true,
//     'age':29
// }));


// generics 3

// type user={
//     name:string,
//     accessTo:string,
// }

// type admin={
//     password:number,
//     serverAccess:boolean
// }

// const userData:user={
//     name:"jyoti",
//     accessTo:'database'
// }

// const adminData:admin={
//     password:45209,
//     serverAccess:true
// }

// function displayData<T>(data:T):T{
//     return data;
// }

// console.log(displayData(userData));
// console.log(displayData(adminData));


let sum = <T>(a:T):T=>{
  return a;
}

console.log(sum("hello"));
console.log(sum(5))
console.log(sum(true));




