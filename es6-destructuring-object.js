let obj = {
    name : 'kgh',
    address : 'kgh940525@gmail.com',
    age : 26
}

// let {name,age} = ob;
// console.log(name,age);

// name의 이름을 -> myName으로 사용 , age의 이름을 -> MyAge사용
let {name :myName, age:myAge} = obj;
console.log(myName);