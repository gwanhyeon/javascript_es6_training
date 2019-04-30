// arrow function

setTimeout(function(){
    console.log("setTimeOut");
},1000);

// callback 함수 처리 반환 값도 있을경우 arrow를 축약해서 짤 수 있음.
setTimeout( () =>{
    console.log("setTimeout Arrow")
},1000)

const newArr = [1,2,3,4,5].map(function(value,index,object){
    return value * 2;
});
// 콜백함수의 단점 여러가지 파라미터를 줄여 줄 수 있음. - return 생략도 가능하다!

const newArrArrow1= [1,2,3,4,5].map( (v) =>{
    return v*2;     // 결과값을 반환 한다!
})

// es6문법  return value 없어도 반환 가능!
const newArrArrow2 = [1,2,3,4,5].map((v) =>(v * 2));

console.log(newArr);
console.log(newArrArrow1)
console.log(newArrArrow2)
// map을 새로운 array생성 세개 모두다 [ 2, 4, 6, 8, 10 ]




