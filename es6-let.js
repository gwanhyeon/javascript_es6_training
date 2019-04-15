
var name = 'kgh';

//todo var 같은경우는 function 단위의 스코프를 가지므로 스코프에서 값을 먼저 찾고, 외부 전역변수로 접근 가능하다.
function let_exam() {
    var main = 'main';

    //todo var로 선언 하면 스코프는 function단위로 인식하기때문에 i값이 100이 출력
    for(var i=0; i<100; i++){
    }
    console.log(i);

    //todo let으로 선언 할 경우 let의 스코프 단위는 {} 단위 이므로, j값을 인식 못하므로 에러 출력
    for(let j=0; j<100; j++){
        console.log(j);
    }
    // console.log(j);
    //todo if문의 경우에도 현재 let 스코프는 {} 이므로 if문 안에 hello로 잡고 있으므로, hello 값을 if문 밖에서 인식 할 수 없음.
    if(true){
        let hello = 'hello';
        console.log(hello);
    }
    // console.log(hello);
}

let_exam()      