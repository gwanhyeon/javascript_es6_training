// restparmeters

// 숫자인지를 체크하는 함수를 만들고 싶을 경우 

// # 1 방법
// ...arg 는 진짜 배열로 바꾸어 주는 역할 ES6
function checkNum(...argArray){
    // 인자 (기본 내장 Arguments- 배열이 아니다)
    const argArray = Array.prototype.slice.call(arguments);
    console.log(argArray);                      // 값 체크
    console.log(toString.call(argArray));       // 타입체크
    // true일경우에만 값을 반환하는 함수 every
    const result_arg = argArray.every((v) => typeof v === "number")
    console.log(result_arg)
    
}
// # 2 방법
// ...arg 는 진짜 배열로 바꾸어 주는 역할 ES6
function checkNum(...argArray){
    // 인자 (기본 내장 Arguments- 배열이 아니다)
    console.log(toString.call(argArray));       // 타입체크
    // true일경우에만 값을 반환하는 함수 every
    const result_arg1 = argArray.every((v) => typeof v === "number")
    console.log(result_arg1)
    
}
// N개의 인자값들 체크 넘버 
const result1 = checkNum(10,2,3,4,5,"55");
const result2 = checkNum(10,4,5,"55");   