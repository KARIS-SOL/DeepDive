let foo;

console.log(typeof foo); // undefined

foo = null;
console.log(typeof foo); // object

foo = {};
console.log(typeof foo); // object

foo = 3;
console.log(typeof foo); // number

foo = 3.14;
console.log(typeof foo); // number

foo = "Hi";
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean

// 단항산술연산자
let x = 5,
  result;

// 선대입 후증가 (Postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후대입 (Prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선대입 후감소 (Postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후대입 (Prefix decrement operator)
result = --x;
console.log(result, x); // 5 5
