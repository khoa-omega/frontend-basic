'use strict';
// Khai báo biến
// [let, const, var] <Tên biến> [= <Giá trị khởi tạo>];
let name = 'Khoa';
console.log(name);

// Datatype
// String
let fullName = 'Nguyễn Văn Nam';
console.log(fullName);

// Number
let age = 18;
console.log(age);
let score = 9.5;
console.log(score);

// Number vs String
let a = '100';
let b = '10';
console.log('a - b = ' + (a - b));
console.log('a + b = ' + (a + b));
console.log('a * b = ' + (a * b));
console.log('a / b = ' + (a / b));
// => Khi thực hiện tính toán (+, -, *, /) với các chuỗi,
// phép + sẽ thực hiện cộng chuỗi thay vì cộng 2 số

// NaN - Not A Number
let nan = 10 / 'c';
console.log(nan);
// Sai lầm khi kiểm tra một biến có phải là NaN
// console.log(nan == NaN);
// console.log(nan != NaN);
console.log(isNaN(nan));

// Boolean
let hasMoney = false;
console.log('hasMoney: ' + hasMoney);

// Useful function
// toString();
let now = new Date();
console.log('now: ' + now.toString());
// Check isInteger
console.log(Number.isInteger('10.5'));
console.log(Number.isInteger(10.5));
console.log(Number.isInteger(10));
// Convert String to Number
console.log(Number('10'));
console.log(Number('10.33'));
console.log(Number('10.33abc'));
console.log(parseInt('10'));
console.log(parseFloat('10.33'));
console.log(parseFloat('10.33abc'));
// => parse...: Trả về số lấy được từ trái qua phải đến kí tự khác số đầu tiên
// => Number(...): Trả về số nếu cả chuỗi đó là số

// Object
// Cách 1: Object
let person = {
    firstName: 'Nguyễn',
    lastName: 'Nam',
    age: 50,
    eyeColor: 'blue',
    showInfo: function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
};
// person.showInfo = function () {
//     console.log(this.firstName + ' ' + this.lastName);
// }
console.log(person);
person.showInfo();
// Cách 2: Function
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
}
let teacher = new Person('Nguyễn', 'Hùng', 29, 'red');
console.log(teacher);

// Array
let fruits = ['banana', 'orange', 'apple'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);
// Thêm vào cuối array
fruits.push('grape');
console.log(fruits);
// Thêm vào đầu array
fruits.unshift('abc');
console.log(fruits);

// Looping
// For index: Lặp key trong array
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log('fruit: ' + fruit);
}
// For of: Lặp value trong array
for (const fruit of fruits) {
    console.log('fruit: ' + fruit);
}
// For in: Lặp key trong object
for (const key in person) {
    console.log('key: ' + key);
    console.log('value: ' + person[key]);
}

// For each: Nâng cao
fruits.forEach(fruit => {
    console.log('fruit: ' + fruit);
});

// Operator: == vs ===
// Javascript: == ~ equal
// Javascript: === ~ ==

// Typeof
console.log(typeof name);
console.log(typeof age);
console.log(typeof person);
console.log(typeof fruits);
let salary = 500.5;
console.log(typeof salary);
salary = 'Khoa';
console.log(typeof salary);

// let, const, var
// const: Hằng số, không thể gán giá trị khác
const PI = 3.14;
// PI = 3.1415; // Lỗi
console.log(PI);
// let: Biến có phạm vi trong cặp ngoặc nhọn gần nhất
// - Không thể khai báo lại biến
let abc = 'abc';
// let abc = 'cba'; // Lỗi
console.log(abc);
{
    let abc = 10;
}
console.log(abc);
// var: Biến
// - Có thể khai báo lại biến
var e = 'event';
var e = 'new event';
console.log(e);
{
    var e = 'hacked';
}
console.log(e);

// Hosting & Hosted
// Chuyển phần khai báo biến lên trên
domain = 'https://google.com';
console.log('domain: ' + domain);
var domain;

// Strict mode
// x = 3.14

// Scope: Local, Global, Loop
// Loop scope
let i = 100;
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log('fruit: ' + fruit);
}
console.log('i: ' + i);

// Try catch
try {
    // throw 'Not found';
    // throw 500;
    // throw fruits;
    let number = 1;
    number.toUpperCase();
} catch(err) {
    console.log('error: ' + err);
} finally {
    console.log('Giải phóng tài nguyên');
}

// Output
// console.log
// window.alert
// document.write
document.write('abc');

// Dom Element: innerHTML, innerText...
let titles = document.getElementsByTagName('title');
if (titles != null && titles.length > 0) {
    titles[0].innerText = 'Hacked';
}

// Dom CSS
// document.getElementById(id).style.property = new style
let body = document.getElementById('body');
body.style.color = 'red';
body.style.backgroundColor = 'lightgray';

// DOM Event
const btn = document.getElementById('click-here');
btn.addEventListener('click', function(event) {
    alert('Bạn đã click vào button');
})

// DOM Document: createElement
const newBtn = document.createElement('button');
newBtn.innerHTML = 'Add';
document.body.appendChild(newBtn);
