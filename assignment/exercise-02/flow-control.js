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
    if (account.department) {
        console.log('Nhân viên này chưa có phòng ban');
    } else {
        console.log('Phòng ban của nhân viên này là ' + account.department.name);
    }
}

function question02() {
    const length = account.group.length;
    if (length == 0) {
        console.log('Nhân viên này chưa có group');
    } else if (length == 1 || length == 2) {
        console.log('Group của nhân viên này là Java Fresher, C# Fresher');
    } else if (length == 3) {
        console.log('Nhân viên này là người quan trọng, tham gia nhiều group');
    } else if (length >= 4) {
        console.log('Nhân viên này là người hóng chuyện, tham gia tất cả các group');
    }
}

function question03() {
    console.log(
        account.department
            ? 'Nhân viên này chưa có phòng ban'
            : 'Phòng ban của nhân viên này là ' + account.department.name
    );
}

function question04() {
    console.log(
        account.position.name == 'DEVELOPER'
            ? 'Đây là developer'
            : 'Người này không phải là developer'
    );
}

function question05() {
    const accounts = [account, account];
    switch (accounts.length) {
        case 1:
            console.log('Nhóm có một thành viên');
            break;
        case 2:
            console.log('Nhóm có hai thành viên');
            break;
        case 3:
            console.log('Nhóm có ba thành viên');
            break;
        default:
            console.log('Nhóm có nhiều thành viên');
    }
}

function question06() {
    switch (account.group.length) {
        case 0:
            console.log('Nhân viên này chưa có group');
            break;
        case 1:
        case 2:
            console.log('Group của nhân viên này là Java Fresher, C# Fresher');
            break;
        case 3:
            console.log('Nhân viên này là người quan trọng, tham gia nhiều group');
            break;
        default:
            console.log('Nhân viên này là người hóng chuyện, tham gia tất cả các group');
            break;
    }
}

function question07() {
    switch (account.position.name) {
        case 'DEVELOPER':
            console.log('Đây là developer');
            break;
        default:
            console.log('Người này không phải là developer');
            break;
    }
}

function question08() {
    const accounts = [account];
    for (const account of accounts) {
        console.log(
            'email: ' + account.email + ', fullName: ' + account.fullName +
            ', phòng ban: ' + account.department.name
        );
    }
}

function question09() {
    const departments = [department];
    for (const department of departments) {
        console.log('id: ' + department.id + ', name: ' + department.name);
    }
}

function question10() {
    const accounts = [account];
    for (let i = 0; i < accounts.length; i++) {
        console.log('Thông tin account thứ ' + (i + 1) + ' là:');
        console.log('Email: ' + accounts[i].email);
        console.log('Full name: ' + accounts[i].fullName);
        console.log('Phòng ban: ' + accounts[i].department.name);
    }
}

function question11() {
    const departments = [department];
    for (let i = 0; i < departments.length; i++) {
        console.log('Thông tin account thứ ' + (i + 1) + ' là:');
        console.log('       Id: ' + departments[i].id);
        console.log('       Name: ' + departments[i].name);
    }
}

function question12() {
    const accounts = [account];
    const max = Math.min(accounts.length, 2);
    for (let i = 0; i < max; i++) {
        console.log('Thông tin account thứ ' + (i + 1) + ' là:');
        console.log('Email: ' + accounts[i].email);
        console.log('Full name: ' + accounts[i].fullName);
        console.log('Phòng ban: ' + accounts[i].department.name);
    }
}

function question13() {
    const accounts = [account];
    for (let i = 0; i < accounts.length; i++) {
        if (i != 1) {
            console.log(accounts[i]);
        }
    }
}

function question14() {
    const accounts = [account];
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].id < 4) {
            console.log(accounts[i]);
        }
    }
}

function question15() {
    for (let i = 0; i <= 20; i += 2) {
        console.log(i);        
    }
}

// Exercise 03 - Question 01
const number = prompt('Nhập vào số nguyên bất kỳ.');
const message = number + ' là số ' + (number % 2 == 0 ? 'chẵn.' : 'lẻ.');
alert(message);

alert('Tài khoản của bạn đã bị khóa!');
