// // let num1:number=10;
// // let num2:number=20;
// // console.log(num1+num2);

// // let fName:string= 'harish';
// // let lName:string= 'kumar';
// // console.log(fName +" "+ lName);

// // let num1:number=10;
// // let name:string='ten';
// // console.log(num1+name);

// // let skills:number[]=[1,2,3,4];
// // let school:string[]=['4,6,7,8']
// // console.log(skills, school);


// // let userData:{name:string, age:number}={
// //     name:'Sujith',
// //     age:30
// // }

// // console.log(userData.age);

// // INTERFACE 

// interface data{
//     name:string,
//     age:number,
//     car:boolean,
//     getData(): void
// }


// let userData:data={
//     name:'sanup',
//     age:34,
//     car:true,
//     getData(){
//         console.log(this.car);   
//     }
// }

// let adminData:data={
//     name:'admin',
//     age:41,
//     car:false,
//     getData(){
//         console.log(this.age);    
//     }
// }

// const a1:any=adminData
// a1.getData();
// const a2:any=userData
// a2.getData();
// //

// GENERICS //
function print1 <gene>(a:gene):gene{
    return a;
}

console.log(print1(150));





// export{}

