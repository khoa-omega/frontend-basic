const department = {
    id: 1,
    name: 'Giám đốc'
};

const position = {
    id: 1,
    name: 'PROJECT_MANAGER'
};

const account = {
    id: 1,
    email: 'khoa.nv@gmail.com',
    username: 'khoa.nv',
    fullName: 'Nguyễn Văn Khoa',
    department: department,
    position: position,
    createdDate: new Date()
};

function question01() {
    for (let number = 2; number < 10; number += 2) {
        console.log(number);
    }
}

function question02() {
    const accounts = [account];
    for (const account of accounts) {
        console.log(account);
    }
}

function question03() {
    for (let number = 1; number < 10; number++) {
        console.log(number);
    }
}
