// 함수 선언문
function square(number) {
  return number * number;
}

// 함수 표현식
var square = function (number) {
  return number * number;
};

// 기명 함수 표현식(named function expression)
var foo = function multiply(a, b) {
  return a * b;
};

// 익명 함수 표현식(anonymous function expression)
var bar = function (a, b) {
  return a * b;
};

console.log(foo(10, 5)); // 50
console.log(multiply(10, 5)); // Uncaught ReferenceError: multiply is not defined

//Function 생성자함수

new Function(arg1, arg2, ...argN, functionBody);
var square = new Function("number", "return number * number");
console.log(square(10)); // 100
