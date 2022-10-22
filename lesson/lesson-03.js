'use strict';
console.log('----------------- STRICT MODE -----------------');
// Chế độ nghiêm túc
// number = 10; // Lỗi
let number = 10;
console.log('number = ' + number);

// Khai báo biến
// [let, var, const] <Tên biến> [= <Giá trị khởi tạo>];

// Kiểu dữ liệu nguyên thủy
console.log('----------------- STRING -----------------');
// String: Sử dụng nháy đơn (') và nháy kép (")
let email = 'khoa.nv@gmail.com';
console.log('email = ' + email);
// Nháy kép (")
console.log("I don't know.");
// Nháy đơn (')
console.log('"JavaScript" thật là thú vị.');

console.log('----------------- STRING TEMPLATE -----------------');
// String template: Sử dụng nháy huyền (`)
// => Giống string format trong Java
console.log('email: ' + email);
console.log(`email: ${email}`);

console.log('----------------- NUMBER -----------------');
let age = 18;
console.log('age = ' + age);
let score = 9.5;
console.log('score = ' + score);

console.log('----------------- NOTE -----------------');
let x = '100';
let y = '10';
console.log('x + y = ' + (x + y));
console.log('x - y = ' + (x - y));
console.log('x * y = ' + x * y);
console.log('x / y = ' + x / y);
// => Phép cộng sẽ ưu tiên cộng chuỗi

console.log('----------------- NOT A NUMBER -----------------');
let div = 100 / 'apple';
console.log('div = ' + div);
// Kiểm tra một biến có phải là NaN?
console.log('(div == NaN) = ' + (div == NaN)); // Sai
console.log('(div === NaN) = ' + (div === NaN)); // Sai
console.log('isNaN(div) = ' + isNaN(div)); // Đúng

console.log('----------------- BOOLEAN -----------------');
let hasMoney = false;
console.log('hasMoney = ' + hasMoney);

console.log('----------------- CONVERT ANY TO STRING -----------------');
// toString()
let a = 123;
console.log('typeof a = ' + typeof a);
console.log('typeof a.toString() = ' + typeof a.toString());

console.log('----------------- NUMBER FUNCTIONS -----------------');
// Number.isInteger()
console.log('Number.isInteger(a) = ' + Number.isInteger(a));
console.log('Number.isInteger(hasMoney) = ' + Number.isInteger(hasMoney));
// Number.isFinite
let infinity = -1 / 0;
console.log('infinity = ' + infinity);
console.log('Number.isFinite(infinity) = ' + Number.isFinite(infinity));

console.log('----------------- CONVERT STRING TO NUMBER -----------------');
let z = '1000';
// Cách 1: Dùng Number
console.log('typeof Number(z) = ' + typeof Number(z));
console.log('Number(z) + 10 = ' + (Number(z) + 10));
// Cách 2: Dùng parseInt
console.log('parseInt(z) + 10 = ' + (parseInt(z) + 10));
// Cách 3: Dùng toán tử +
console.log('+z + 10 = ' + (+z + 10));

console.log('----------------- STRING FUNCTIONS -----------------');
// Một vài function khác
let s = 'Apple, Orange, Mango';
console.log('s.slice(7, 13) = ' + s.slice(7, 13));
console.log("s.replaceAll('a', '*') = " + s.replaceAll('a', '*'));
console.log('s.toUpperCase() = ' + s.toUpperCase());
console.log('s.toLowerCase() = ' + s.toLowerCase());
console.log('s.charAt(s.length - 1) = ' + s.charAt(s.length - 1));

console.log('----------------- FUNCTION -----------------');
// Loại 1. Normal function
function normal(name) {
    console.log('Loại 1. Normal function => Chào ' + name);
}
normal('Khoa');
// Loại 2. Anonymous function
let anonymous = function (name) {
    console.log('Loại 2. Anonymous function => Chào ' + name);
};
anonymous('Khoa');
// Loại 3. Arrow function
let arrow = name => console.log('Loại 3. Arrow function => Chào ' + name);
arrow('Khoa');

console.log('----------------- OBJECT -----------------');
// Cách 1: Dạng key: value
let student = {
    name: 'Khoa',
    age: 18,
    score: 6.5,
    plusScore: function (value) {
        this.score += value;
    },
    get info() {
        return 'Student[name=' + this.name + ',score=' + this.score + ']';
    },
    set setScore(value) {
        this.score += value;
    }
};
console.log(student);
student.setScore = 3.5;
student.plusScore(5);
console.log('student.info = ' + student.info);
// Cách 2: Sử dụng function
function Student(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
}
let khoa = new Student('Khoa', 23, 10);
console.log(khoa);

console.log('----------------- DATE -----------------');
let today = new Date();
console.log('today = ' + today);
console.log('today.toLocaleDateString() = ' + today.toLocaleDateString());
console.log('today.toLocaleTimeString() = ' + today.toLocaleTimeString());
console.log('today.toLocaleString() = ' + today.toLocaleString());
let now = Date.now();
console.log('now = ' + now);
// yyyy, MM, dd (MM bắt đầu từ 0)
let date = new Date(2022, 0, 29);
console.log('date.toLocaleString() = ' + date.toLocaleString());
// Convert String to Date: yyyy-MM-dd
let dateFromString = new Date('1975-04-30');
console.log('dateFromString = ' + dateFromString);

console.log('----------------- ARRAY -----------------');
// Java: String[] fruits = new String[] {"apple", "mango", "orange"};
let fruits = ['apple', 'mango', 'orange'];
console.log(fruits);
console.log('fruits.length = ' + fruits.length);
// Thêm một phần tử vào cuối mảng
let newLength = fruits.push('tomato');
console.log('newLength = ' + newLength);
console.log(fruits);
// Xóa một phần tử cuối mảng
let popped = fruits.pop();
console.log('popped = ' + popped);
console.log(fruits);
// Thêm một phần tử vào đầu mảng
fruits.unshift('tomato');
console.log(fruits);
// Xòa một phần tử đầu mảng
fruits.shift();
console.log(fruits);

console.log('----------------- FLOW CONTROL -----------------');
// if else: Giống Java
// switch case: Giống Java
// while, do while: Giống Java
// break, continue: Giống Java
// looping: for index, for in, for of, while, do while

console.log('----------------- FOR INDEX -----------------');
// For index: Lặp key trong array
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log('i = ' + i + ', fruit = ' + fruit);
}

console.log('----------------- FOR IN -----------------');
// For in: Lặp key trong object
for (const key in student) {
    console.log('key = ' + key + ', value = ' + student[key]);
}

// For of: Lặp value trong array
console.log('----------------- FOR OF -----------------');
for (const fruit of fruits) {
    console.log('fruit = ' + fruit);
}

console.log('----------------- FOR EACH -----------------');
// For each: Nâng cao
fruits.forEach(fruit => console.log('fruit: ' + fruit));

// Operators: Giống Java
// JavaScript vs Java
// == ~ equals: So sánh nội dung
// === ~ ==: So sánh địa chỉ

console.log('----------------- JAVASCRIPT TYPE IS DYNAMIC -----------------');
let dynamic = 1000;
console.log('typeof dynamic = ' + typeof dynamic);
dynamic = 'string';
console.log('typeof dynamic = ' + typeof dynamic);

console.log('----------------- HOSTING & HOSTED -----------------');
// Tự động chuyển phần khai báo biến lên trên
domain = 'https://google.com';
console.log('domain = ' + domain);
var domain;

console.log('----------------- SCOPE -----------------');
// Scope: Phạm vi ảnh hưởng của biến
// Có 3 scopes: Local, Global, Looping
// Từ khóa let: Biến cục bộ
// => Không thể khai báo lại biến
let salary = 25;
// let salary = '100'; // Lỗi
console.log('salary = ' + salary);
{
    let salary = '100';
    console.log('salary = ' + salary);
}
console.log('salary = ' + salary);

// Từ khóa var: Biến toàn cục
// => Có thể khai báo lại biến
var role = 'ADMIN';
var role = 'ADMIN';
console.log('role = ' + role);
{
    var role = 'EMPLOYEE';
    console.log('role = ' + role);
}
console.log('role = ' + role);

// Từ khóa const: Biến cục bộ, là hằng số
// => Không thể khai báo lại biến
// => Không thể gán giá trị khác
const PI = 3.14;
// const PI = 3.1415; // Lỗi
// PI = 3.1415; // Lỗi

console.log('----------------- TRY CATCH FINALLY -----------------');
// try catch finally: Giống Java
// throw đơn giản hơn
try {
    // throw 500;
    throw 'Có lỗi xảy ra';
} catch (error) {
    console.log('error = ' + error);
} finally {
    console.log('Thu hồi tài nguyên');
}

console.log('----------------- OUTPUT -----------------');
// console.log
// document.write
document.write('This text is added by JavaScript.');
// window.alert
window.alert('Máy bạn đã bị nhiễm virus.');

console.log('----------------- JAVASCRIPT DOM -----------------');
// DOM: Document Object Manipulate
// DOM Element: Thao tác với thẻ HTML
// document.getElementById();
// document.getElementsByTagName();
// document.getElementsByClassName();
let demo = document.getElementById('demo');
demo.innerText = 'Thẻ này có thuộc tính id là "demo"';

let divs = document.getElementsByTagName('div');
if (divs != null) {
    for (const div of divs) {
        div.innerHTML = 'Đây là thẻ div.';
    }
}

let reds = document.getElementsByClassName('red');
if (reds != null) {
    for (const red of reds) {
        red.innerHTML = 'Thẻ này có class red.';
    }
}

// DOM CSS
// Cách 1:
reds[0].style.color = 'red';
reds[0].style.backgroundColor = 'yellow';
// Cách 2:
demo.classList.add('highlight');

// DOM Document
let btn = document.createElement('button');
btn.innerText = 'Đăng nhập';
btn.style.display = 'block';
document.body.append(btn);

// DOM Event
btn.addEventListener('click', function (event) {
    window.alert('Đăng nhập thành công');
});
