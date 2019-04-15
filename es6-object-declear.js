// object생성

const name = 'kgh';
const age = '26';
// Object = key : value
const user = {
    name : name,
    age : age
}
console.log(user);

function getObj() {
    const name = 'crong';
    const getName = function() {
        return name;
    }
    const setName = function(newname){
        name = newname;
    }
    const printName = function() {
        console.log(name);
    }
    //todo  굳이 key value 가 일치하면 
    return {

        //todo {getName, setname} 도 동일하게 처리 된다!
        getName : getName,
        setName : setName
    }
}
let obj = getObj();
console.log('obj' ,obj);
//todo { getName: [Function: getName], setName: [Function: setName] }
console.log('obj.getName()',obj.getName());

// todo 좀더 간단하게 
const data = {
    name,
    getName() {
       // 이런식으로 사용해도 된다 
    },
    age
}