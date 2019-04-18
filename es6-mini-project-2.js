/*
1. Destructuring and set
lotto 번호 만들기
유일한 값을 추출하는 Set사용 
getRandomNumber함수에서 변수를 전달하는 과정에서 destructuring 사용
*/
const SETTING = {
    name :"LOTTO!",
    count : 6,
    maxNumber : 45
}
let {name,count,maxNumber} = SETTING;

console.log(name);
console.log(getRandomNumberSetter(count,maxNumber));

//randomnumber setting
function getRandomNumberSetter(count,maxNumber){
    const numberSet =new Set();
    for(let i=0; i <count; i++){
        numberSet.add(getRandomNumber(maxNumber));
    }
    return numberSet;
}
// Random Number
function getRandomNumber(maxNumber){
    return Math.floor(Math.random() * maxNumber + 1);
}
