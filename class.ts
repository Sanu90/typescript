class Parent{
    name:string;
    mobile:number;
    constructor(name:string, mobile:number){
        this.name=name;
        this.mobile=mobile
    }
}

class Child extends Parent{
    name:string;
    mobile:number;
    constructor(name:string, mobile:number){
        super(name,mobile);
        this.name=name;
        this.mobile=mobile;
    }

    display():string{
        return `my name is ${this.name} & contact me @ ${this.mobile}`;
    }
}

const c1=new Child('divakaran',895855);
const c2=new Child('sanup',45210);
console.log(c1.display());
console.log(c2.display());

