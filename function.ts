type Data={
    name:string;
    roll:number;
    class:number;
}

let Details:Data={
    name:"manoj",
    roll:54,
    class:8
}

function getStudent(Details:Data):number{
return Details.class;
}

console.log(getStudent(Details));


// can be used as inline as well. but it is advised to use interface or type in each case. 


function abc():void{
console.log("hello function");
}

abc();


export{}