// spread operator, 전개 연산자
let data = ['apple', 'orange', 100];
let newData = [...pre];       // ... 전개 연산자로 그 값을 newData에 넣는다.(새로운 공간에 새로운 데이터)
// 같은 참조가 아님 -> 복사했다고 생각하면 된다. 
// concat이랑 똑같다고 보면된다.
console.log(pre === newData); // 참조 또한 같은지 확인 === 


