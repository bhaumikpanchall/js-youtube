let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 =>. true; 0 => false
// "" => false
// "Bhaumik" => true

let someNumber = 33

let StringNumber = String(someNumber);
console.log(typeof StringNumber);
console.log(StringNumber);