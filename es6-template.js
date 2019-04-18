const data = [
    {
        name:'coffe-bean',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name: 'starbucks',
        order : false
    }
]
//json 응답받고 -> javascript object로 변환한후 어떠한 데이터처리 조작을 한후 dom에 추가!
// 데이터 + HTML문자열의 결합이 필요

const template = `<div>welcome ${data[0].name} !! `;
console.log(template);


