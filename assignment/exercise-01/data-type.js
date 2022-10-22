// Question 01
function Department(id, name) {
    this.id = id;
    this.name = name;
}

function Position(id, name) {
    this.id = id;
    this.name = name;
}

function Account(id, email, username, fullName, department, position, createdDate) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.fullName = fullName;
    this.department = department;
    this.position = position;
    this.createdDate = createdDate;
}

// Question 02
const department = new Department(1, 'Giám đốc');
const position = new Position(1, 'PROJECT_MANAGER');
const account = new Account(1, 'khoa.nv@gmail.com', 'khoa.nv', 'Nguyễn Văn Khoa', department, position, new Date());

// Question 03
console.log(department);
console.log(position);
console.log(account);
