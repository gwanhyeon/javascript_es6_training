var data = [1,2,undefined,NaN,null,''];

//todo forEach value Extract
data.forEach(function(value){
    console.log('forEach',value);
});
/*
forEach 1
forEach 2
forEach undefined
forEach NaN
forEach null
forEach 
*/

// todo for in 으로 가끔 쓰는데 
// 문제가 있음. -> 보통 Object타입을 순회를 많이 한다. 
// array도 되긴 하지만, 상위의 값까지 결과에 포함 시킬 수 있음.
//예를 들면 같은경우는 for in을 사용해서 출력할 경우 function() {};가 같이 출력된다.
// 따라서 array에서는 사용하지 말것! 문제 야기!
Array.prototype.getIndex = function() {};
//for in 문
for(let idx in data){
    console.log('forin',data[idx]);
}
/*
forin 1
forin 2
forin undefined
forin NaN
forin null
forin 
forin function() {}
*/

//todo for of 문(Array가능 -> 이러한 문제 해결)
for(let value of data){
    console.log('for of', value);
}
/*
for of 1
for of 2
for of undefined
for of NaN
for of null
for of 
*/

// todo for문
for(var i=0; i<data.length; i++){
    console.log('for',i);
}
/*
for 0
for 1
for 2
for 3
for 4
for 5
*/

//todo string 값으로 for of 처리 가능하다.(char 단위로 출력한다. string 단위 X)
var str = 'hello world';
for(let value of str){
    console.log('for in(str)',value);
}