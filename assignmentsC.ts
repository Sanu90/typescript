// let array:number[]=[8,42,12,7,15];
// let count:number=0;
// for(let i:number=0;i<array.length;i++){
//     if(array[i]%2==0){
//             count+=1;
//     }
// }
// console.log("Total even number is:", count);

// let array:number[]=[8,4,12,3,15];

// function bubbleSort(array):number[]{
// let count:number=1;
// do{
//     count=0;
//     for(let i:number=1;i<array.length;i++){
//         if(array[i]<array[i-1]){
//             let temp:number = array[i];
//             array[i]=array[i-1];
//             array[i-1]=temp;
//             count=1;
//         }
//     }
// }
// while(count){
//     return array;
// }
// }

// console.log(bubbleSort(array));


// check string is palindrome or not 

// let name:string='hello';
// let left:number=0;
// let right:number=name.length-1;

// function palindrome(name,left,right):string{
//     if(name[left]!=name[right]){
//         //console.log("Not palindrome");
//         return 'not palindrome'
//     }
//     if(left>=right){
//         return 'palindrome'
//     }
//     return palindrome(name,left+1,right-1);
// }

// console.log(palindrome(name,left,right));



// accept an array and display using functions

function getArray():number[]{
    const prompt=require('prompt-sync')();
    const arraySize=parseInt(prompt("enter array size: "),10);
    const array:number[]=[];

for (let i:number = 0; i < arraySize; i++) {
    const element = parseInt(prompt(`Enter element ${i + 1}: `), 10);
    array.push(element);
  }

  return array;
}
function displayArray(arr: number[]): void {
  console.log('Array values are:');
  arr.forEach((value, index) => {
    console.log(`Element ${index + 1}: ${value}`);
  });
}


function main(): void {
  let myArray: number[];

  myArray = getArray();
  displayArray(myArray);
}

main();

export {}
