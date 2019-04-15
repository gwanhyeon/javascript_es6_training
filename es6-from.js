function addMark(){
    let newData = [];
    // 아직 값이 없을때니까 arguments로 초기화도 시켜 줄 수 있다.
    // todo 인자값을 안주어도 특정값을 객체로 arguments로 선언해서 인자 값으로 배열과 비슷한 값으로 들어가게 된다.
    // 가변적인 파라미터 일 경우
    for(let i=0; i<arguments.length; i++){
        newData.push(arguments[i] + "!");
    }
    console.log('newData1',newData);
    // todo argument를 사용한 map 예제
    // todo 여기서 argument.map을 사용하게 되면 에러가 나게된다!
    // todo 왜!? 배열과 흡사하지만 배열이 아니다 arguments! 
    /*
    let newData1 = arguments.map(function(value){
        return value + "!";         
    })
    console.log('newData1',newData1);
    */

    //todo [최근]arguments to Array 변환 (from을 사용하면 된다!) 간단히 해결
    let newArray = Array.from(arguments);
    let newData2 = newArray.map(function(value){
        return value + "!";         
    })
    console.log('newData2',newData2);
}
addMark(1,2,3,4,5,6,7,8,9);
// [ '1!', '2!', '3!', '4!', '5!', '6!', '7!', '8!', '9!' ]