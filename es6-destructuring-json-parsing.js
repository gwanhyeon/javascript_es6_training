var news = [
    {
        'title' : 'sbs',
        'imgurl' : 'http://localhost:3000',
        'newlist' : [
            "hello"
        ]
    },
    {
        'title1' : 'sbs1',
        'imgurl1' : 'http://localhost:8000',
        'newlist' : [
            "world"
        ]
    }
]

// mbc 파싱
let [mbc,] = news;
console.log(mbc);
// title, imgurl
let {title, imgurl} = mbc;
console.log(title,imgurl);

// todo 위에 값을 개선 시켜볼 것
let [,{title1,imgurl1}] = news;
console.log('img',imgurl1);





