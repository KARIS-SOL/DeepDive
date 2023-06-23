// 오른쪽부터 연산 하는 것 잊지말것

// 논리합(||) 연산자
"Cat" || "Dog"; // 'Cat'
false || "Dog"; // 'Dog'
"Cat" || false; // 'Cat'

// 논리곱(&&) 연산자
"Cat" && "Dog"; // Dog
false && "Dog"; // false
"Cat" && false; // false

// 함수 인수 초기화 할때
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || "";
  return str.length;
}

getStringLength(); // 0
getStringLength("hi"); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = "") {
  return str.length;
}

getStringLength(); // 0
getStringLength("hi"); // 2
