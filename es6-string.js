// ES6 2015  string Method

// 스트링 처리는 rex,match

let str = 'developer kim gwan hyeon!^';
let matchstr = 'developer1';

// Start 시작지점 문자열에서 맨 처음부분 체크
console.log(str.startsWith(matchstr));
// developer와 정확히 일치하면 true, 아니면 false;
// EndsWith 마지막 지점 문자열에서 체크
console.log(str.endsWith(matchstr))
// 포함되어 있는 string 확인
console.log('인클루드 포함된 문자',str.includes('^'));


