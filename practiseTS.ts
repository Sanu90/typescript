// // class and object

// class person{
//     sName: string;
//     age:number;

//     constructor(sName:string,age:number){
//         this.sName=sName;
//         this.age=age;
//     }

//     greet(): void{
//         console.log(`Hi ${this.sName}, you are ${this.age} years now.`)
//     }

// }

// const s1=new person("Sanup",32);
// s1.greet();
// const s2=new person("Rema", 49);
// s2.greet()


// function makeUpper(val: string){
//     return val.toUpperCase();
// }

// console.log(makeUpper('sanup'));

// READ ONLY

// type User={
//     readonly id: number[],
//     name: string,
//     email:string
// }

// let newUser:User={
//     id:[1,2,3],
//     name:'gopi',
//     email:'gopi@gmail.com'
// }

// newUser.email='gopichand@gmail.com';
// newUser.id.push(5);

// Union

// let data: string | number | boolean =30;
// data='hello';
// data=true;


// let data1:number[]=[1,2,3];
// let data2:string[]=['1','2','3'];
// let data3:(number|string)[]=['1',2,3,'4'];

// TUPLE

// let hello:[string,boolean,string,number]
// hello=['morning',true,'happy',100]

// hello[1]=false;
// console.log(hello);
// hello.shift()
// console.log(hello);


// type status='pending'|'approved'|'rejected';

// let currentStatus:status='approved';


// INTERFACE

// interface user{
//     readonly id: number,
//     name: string,
//     email?: string,
//     phone: number,
//     gender: string,
//     display(): string,
//    // giveCoupon(couponName:string):number
// }

// const newUser:user={
//     id:458,
//     name:'kumar palani',
//     phone:9510210245,
//     gender:'male',
//     display:()=>{interface
//         return `Display user details`
//     }
// }

// Access specifier


let a:number=10;
console.log(a);


