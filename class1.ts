// Push student names into an array & display it, using a class.

class Student{
  studList: string[]=[];
  name:string;
//   constructor(name:string){
//     this.name=name;
//   }
  addStudent(name:string):void{
    this.studList.push(name);
  }
  display():void{
    for(let i:number=0;i<this.studList.length;i++) {
        console.log(this.studList[i]);
    }   
  }
}

const stud=new Student();
stud.addStudent("abcd");
stud.addStudent("harish");
stud.addStudent("sudeep");

stud.display();

