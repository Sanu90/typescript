// const prompt = require('prompt-sync')(); 

// const limit: number = parseInt(prompt("Enter array limit:") || '');
// let array:number[]=[];
// let result:number[]=[];

// for(let i:number=0;i<limit;i++){
//     const value:number=parseInt(prompt("Enter array value "+i+":" ));
//     array.push(value);
// }

// for(let i:number=1;i<limit;i++){
//     result.push(array[i]*array[i-1])
// }

// console.log("Resultant array is: ",result);


// function reverse(my_string: string):void{
//     try{
//         const reverse_string: string = my_string.split('').reverse().join('');
//         console.log("reverse string:",reverse_string);
//         console.log("type-->",typeof reverse_string);   
//     }catch(error){
//         console.log(error);
        
//     }
// }

// reverse("typescript");


// const prompt=require('prompt-sync')();
// let my_height:number=parseInt(prompt("Enter your height :"));
// function checkisNan(my_height):void{
// try{
//     if(isNaN(my_height)){
//         throw("NotaNumberError");
//     }else if(my_height>200){
//         throw("hugeHeightError");
//     }else if(my_height<40){
//         throw("tinyHeightError");
//     }else{
//         console.log("valid height entered.");
        
//     }
// }catch(error){
//     console.log(error);
// }

// }
 
// checkisNan(my_height);




class Car{
    name: string;
    mileage:number;
    max_speed:number
    constructor(name,mileage,max_speed){
        this.name=name;
        this.mileage=mileage;
        this.max_speed=max_speed;
    }
}

const myClass = new Car('Tavera',15,140);
console.log(myClass.name);
console.log(myClass.mileage);
console.log(myClass.max_speed);


export {}