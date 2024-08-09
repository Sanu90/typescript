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

function getStudent(Details:Data){
return Details.class;
}

console.log(getStudent(Details));



export{}