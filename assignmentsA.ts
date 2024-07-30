
// let charInput: string = 'A';
// console.log(charInput);


// let num1:number = 10;
// let num2:number = 20;
// console.log(num1+num2);


// let principal: number = 10000;
// let interest: number = 5;
// let years: number = 2;
// let SI: number = (principal*interest*years)/100;
// console.log("SI:", SI);



// let marks:number = 37;
// if(marks>=50 && marks<=100){
//     console.log("student passed");
// }else if(marks>0 && marks<50){
//     console.log("student failed");   
// }

let marks: number = 97;
switch(true){
    case (marks>90 && marks <=100): {
        console.log("Grade is A");
        break;
    }
    case (marks>80 && marks <91): {
        console.log("Grade is B");
        break;
    }
case (marks>70 && marks <81): {
        console.log("Grade is C");
        break;
    }
    case (marks>60 && marks <71): {
        console.log("Grade is D");
        break;
    }
    case (marks>=50 && marks <61): {
        console.log("Grade is E");
        break;
    }
    case (marks<50):{
        console.log("Failed");
        break;
    }
    default: console.log("Invalid marks entered");
}

export {}
