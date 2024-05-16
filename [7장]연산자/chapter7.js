/* 문자열 연산 */
let str1 = "Hello, ";
let str2 = "World!";
let str3 = "Hello, World!";

console.log('str1 + str2 = ', str1 + str2); // "Hello, World!"
console.log('str3 / str2', str3 / str2); // NaN
console.log('"10" - "2"', "10" - "2"); // 8


/* 부수효과 */
let x = 1;

function addOne() {
  x = x + 1; // 이 함수는 외부 변수 x의 값을 변경하므로 부수 효과가 있음
}

addOne();
console.log('변경된 x의 값', x); // 2

/* for 루프에서 여러 변수를 동시에 초기화 & 업데이트*/
// for (let i = 0, j = 10; i < j; i++, j--) {
//  console.log('i, j ===', i, j);
//}