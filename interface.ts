// let person:{name:string,age:number,class:number,teacher:string}={
//     name:'kumar',
//     age:23,
//     class:8,
//     teacher:'jyothi'
// }


// INTERFACE //

interface Student{
    name:string;
    age:number;
    class:number;
    teacher?:string;
    schoolBus:number|boolean;
}

let person:Student={
    name:'hari',
    age: 14,
    class:8,
    teacher:'kavya',
    schoolBus:true
}


console.log(typeof person.age);
