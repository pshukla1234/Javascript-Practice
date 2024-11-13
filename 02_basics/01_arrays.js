let arr1 = ["hello","world"]
arr1.push("Pranjal")

console.log(arr1);

let arr2 = arr1
arr2.push("is my name")
console.log(arr2);

arr2.pop()

console.log(arr2);

let newSplicearr = arr2.splice(0,1)
console.log(newSplicearr);

const newarr = new Array();
newarr.push(1,2,3,4,5,6,7,8,9)
console.log(newarr)

console.log(newarr.includes(3))

console.log(newarr.indexOf(5));

let slicedArr = newarr.slice(0,4)
console.log(slicedArr);


console.log(newarr);







