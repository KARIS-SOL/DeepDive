// 조건식 ? 조건식이 ture일때 반환할 값 : 조건식이 false일때 반환할 값
let x = 2;

// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
let result = x % 2 ? "홀수" : "짝수";

console.log(result); // 짝수

let y = 4,
  result;

// y가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// 4 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if (y % 2) result = "홀수";
else result = "짝수";

console.log(result); // 짝수
