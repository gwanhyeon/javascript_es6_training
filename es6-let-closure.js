 
    // li TAG 가져온다.
    var list = document.querySelectorAll('li');
    // 보통 ul tag -> li bubbling

    // Closure Example
    // 스코프가 존재하는것을 알 수 있다, 리스트 1,2,3,4 의 결과값은 모두 4
    // 왜 ? 

    /*
    ('click'),function() {
        console.log(i); 여기서 i값은 클로저
    })
    i값이 for문에서 4까지 도달한 값을 계속 쉐어링 하고있으므로, 모든 값이 4로 나오게 된다.
    예를 들어, let을 사용하면 간단하게 해결이 가능 하다.
    */

    // 스코프 var 에러 코드
    // var = function SCOPE! 
    // var는 1,2,3,4를 돌면서 addEventListener를 해주고 있고, 아직 이벤트는 발생이 되지 않은 상황이기 때문에
    // var 는 현재 값을 4를 유지 시키게 된다. 
    // 따라서 결과: 어떤 입력 리스트 이벤트가 발생해도 모든 값이 4로 function scope를 참조한다.
    for(var i=0; i<list.length; i++){
        list[i].addEventListener("click",function(){
            console.log(i + "리스트");
        })
    }

    // 스코프 let 성공 코드
    // let = { } SCOPE
    for(let i=0; i<list.length; i++){
        list[i].addEventListener("click",function(){
            console.log(i + "리스트");
        })
    }