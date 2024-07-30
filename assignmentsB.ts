// let day: number = 5;
// switch(day){
//     case 1: {
//         console.log("Sunday");
//         break;
//     }
//     case 2: {
//         console.log("Monday");
//         break;
//     }
//     case 3: {
//         console.log("Tuesday");
//         break;
//     }
//     case 4: {
//         console.log("Wednesday");
//         break;
//     }
//      case 5: {
//         console.log("Thursday");
//         break;
//     }
//     case 6: {
//         console.log("Friday");
//         break;
//     }
//     case 7: {
//         console.log("Saturday");
//         break;
//     }
    
//     default: console.log("Invalid number");
// }


// let num:number = 10;
// for(let i:number =1;i<11;i++){
//     console.log(num,"*",i,'=',num*i)
// }


// const limit:number =10;
// let sum:number=0;
// for(let i:number=1;i<=limit;i++){
//     if(i%2==1){
//         sum+=i;
//     }
// }
// console.log("sum of odd number upto limit is:", sum);


// for(let i:number=1;i<=5;i++){
//     let str:string='';
//     for(let j:number=1;j<=i;j++){
//         str=str+' '+ j;
//     }
//     console.log(str);
// }


let array1:number[]=[1,2,3,4,5];
let array2:number[]=[6,7,8,9,10];

for(let i:number=0;i<array1.length;i++){
    let temp:number=array1[i];
    array1[i]=array2[i];
    array2[i]=temp;
}

console.log("array1 is:", array1);
console.log("array2 is:", array2);






