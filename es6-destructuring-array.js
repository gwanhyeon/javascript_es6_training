// destructuring

let data = ['A','B','C','D'];
// A -> 값이 A랑 매칭되고, 두번째 값은 , 건너뛰고, 세번째 값은 C->C매칭 그값을 바로 활용 가능.
let[A,,C] = data;
console.log(A,C);
