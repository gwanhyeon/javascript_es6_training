// default prameters

function sum(value,size){

    size = size || 1     // 사이즈가 있으면 사이즈, 없으면 1 default value
    return value * size;
}

function sum_default(value,size=1){
    return value * size;
}
function sum_default_object(value,size={value:1}){
    return value*size.value;
}

//두번째 인자값을 준경우
console.log(sum(3,10));
// 두번째 인자값을 주기 않을경우 
console.log(sum(3));
// default sum
console.log(sum_default(3));

//object로  넣어줄 경우

console.log(sum_default_object(3,{value:3}));



