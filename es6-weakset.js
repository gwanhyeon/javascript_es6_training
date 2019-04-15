//set:중복없이 저장함 VS  weakset: 참조를 가지고 있는 객체만 저장이 가능하다

let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = { arr,arr2 };
let ws = new WeakSet();

//todo 객체가 null, 필요없어지만 가비지컬렉션 대상이 된다. WeakSet에서도 그값이 사라지게 된다.
//todo 참조를 계속 모니터링해준다
// 객체가 아닌값을 넣게되면 invalid 타입이 나오게 된다.
ws.add(arr);
// ws.add(111);
// ws.add("111");
// ws.add(null);
//ws.add(function(){});

ws.add(arr2);
ws.add(obj);

//todo 여기 null값을 해버리면 , 콘솔에는 있는것 처럼 찍히지만 그 참조는 실제로 삭제가 된거다. -> 가비지컬렉터로 간거임.
// arr = null;
// arr2 = null;

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));