// outer라는 식별자가 붙은 레이블 for 문
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    // i + j === 3이면 외부 for 문을 탈출한다.
    if (i + j === 3) break outer;
  }
}

console.log("Done!");
