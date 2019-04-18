const data = [
    {
        name:'coffe-bean',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name: 'starbucks',
        order : false
    },
    {
        name:'coffe-king',
        order : true,
        items : ['americano', 'latte']
    }

];
function fn(tags,name,items){
    console.log(tags);
    if(typeof items === 'undefined'){
        items = '주문가능한 상품이 없습니다.'
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}

// Tagged template literals
//todo template에서 function으로 감싸기 가능!
//첫번째 방법
// const template = fn`<div> welcomde ${data[0],name} !! </div>
// <h2>주문 가능항목 </h2> <div> ${data[0].items}</div>`;
// console.log(template);

//두번째 방법
data.forEach((v) => {
    fn`<h2> 주문 가능항목 </h2> <div>${v.items}</div>
    <h2>주문가능항목</h2> <div> ${v.items}</div>`;
    console.log(template);

    
})
