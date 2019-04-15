let mySet = new Set();
console.log(toString.call(mySet));

// Set Type
//todo  Set의 타입 => 중복 없이 유일 한 값을 저장하려고 할때.
//todo  이미 존재하는지 체크하는지 유용!

// add 값 추가
mySet.add('kgh');
mySet.add('miki');
mySet.add('john');

// has -> 값이 있는지?
console.log(mySet.has('kgh'));

// true return, 값 체크!
//todo foreach를 사용한 값 순회
mySet.forEach(function(v){
    console.log(v);
})

//todo delete

mySet.delete('kgh');

mySet.forEach((v) =>{
    console.log('value', v);
})