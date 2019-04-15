let pre = [100,200,'hello',null];
let newData = [0,1,2,3,...pre,4];

// 배열을 특정 배열에 끼워 넣을 때 사용
console.log(newData);

// 개별 파라미터로 값을 전달하기가 쉽다.


function sum(a,b,c) {
    return a+b+c;
}
let data = [100,200,300,4000];

//보통의 경우 합할때,
sum(data[0],data[1],data[2]);

//[기존] 배열 그대로 전달 하고 싶을때 apply를 사용하면 된다.
console.log(sum.apply(null,data)); // 펼쳐지면서 1,2,3로 들어가게된다.

// [최신]
console.log('result', sum(...data)); // 펼쳐지면서 들어가게된다.
// 만약에 
// let data = [100,200,300,4000] 이렇게 전달하게 된다면, 4000은 무시되고 0,1,2번째 인덱스만 들어가게된다.
