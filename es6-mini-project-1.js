/*
filter, includes ,from을 사용해서 문자열 'e' 가 포함된 배열을 만들어서 반환하기
*/

function String_Check(){
    let data = document.querySelectorAll('li');
    //자바스크립트에서 tostringcall 타입 체크할때
    console.log(toString.call(data));
    let listdata = Array.from(data);        // li 노드로 구성된 배열
    // filter는 Array만 가능하다.
    let filterData = listdata.filter(function(value){
        // value 는 하나하나의 노드이므로, innerText를 사용해서 도메인 속성 문자열 뽑아내야함.
        return value.innerText.includes('e');
    })
    console.log(filterData.length);
    // 2 출력 
    return filterData;
}
    
console.log(String_Check());