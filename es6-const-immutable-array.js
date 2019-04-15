// const를 사용하더라도 Array, Object의 값을 변경하는것은 가능하다
// Exmapel - push() 
function kgh() {
    const list = ['김', '관', '현'];
    list.push('개발자');
    console.log(list);
    //[ '김', '관', '현', '개발자' ]
}
kgh();

// immutable array 만드는 방법?
// array는 값이 바뀌므로, 이전의 데이터의 참조를 알 수 없다.
// 그래서 immutable array를 사용하면 간단하게 앞뒤 참조를 할 수 있다.

const myhome = ['water', 'notebook', 'watermelon'];
// [].concat 으로 cellphone을 추가시켜준다. 
myhome_2 = [].concat(myhome,'cellphone');       // 새로운 공간을 만들어서 대입하는것. 참조 다르다.
// immutable array => react redux reduce 사용할때 많이 씀.
console.log(myhome === myhome_2);
// false 반환 -> 값이 다르다

