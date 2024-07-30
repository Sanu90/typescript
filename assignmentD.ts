// check a number is prime or not.

// let value:number=15;

// function isPrime(value):boolean{
//     let count:number=0;
// for(let i:number=2;i<value;i++){
//     if(value%i===0){
//         count+=1;
//     }
// }
// return count>0?false:true;
// }

// console.log(isPrime(value));

// Calculator class with methods for basic operations



//
//const prompt = require('prompt-sync')(); 

// const test: number = parseFloat(prompt("Enter marks in written exam:") || '');
// const lab: number = parseFloat(prompt("Enter marks in lab exam:")|| '');
// const assignment: number = parseFloat(prompt("Enter marks from assignment:")|| '');

// const grade:number = (test*70)/100 + (lab*20)/100 + (assignment*10)/100;

// console.log("Student Grade is ", grade);

// const prompt = require('prompt-sync')(); 
// const income: number = parseInt(prompt("Enter your annual income:") || '');
// let tax:number;
// switch(true){
//     case (income<=250000): {
//         console.log("No tax");
//         break;
//     }
//     case (income>250000 && income<500000): {
//         tax=(income*5)/100;
//         console.log("Tax amount is: ", tax);
//         break;
//     }
//     case (income>500000 && income<1000000): {
//         tax=(income*20)/100;
//         console.log("Tax amount is: ", tax);
//         break;
//     }
//     case (income>1000000 && income<5000000): {
//         tax=(income*30)/100;
//         console.log("Tax amount is: ", tax);
//         break;
//     }
// }
// export {}

let k:number=1;
let str:string='';
for(let i:number=0;i<4;i++){
    for(let j:number=0;j<4;j++){
        if(j<=i){
            str+= `${k} `;
            k++;
        }
        else{
           str+=" "; 
        }
    }
    str+='\n';
    
}
console.log(str);
    
