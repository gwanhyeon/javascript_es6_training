var news = [
    {
        'title' : 'sbs',
        'imgurl' : 'http://localhost:3000',
        'newslist' : [
            "hello"
        ]
    },
    {
        'title1' : 'sbs1',
        'imgurl1' : 'http://localhost:8000',
        'newslist' : [
            "world"
        ]
    }
]
// 이런식으로 호출형식으로 파라미터를 매개변수를 사용하여 사용 할 수 도 있음.
function getNewsList([,{newslist}]){
    console.log(newslist);
}
getNewsList(news);