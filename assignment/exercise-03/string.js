function question01() {
    const string = prompt('Nhập vào một chuỗi bất kỳ.');
    return string
        .split(' ')
        .reduce((count, word) => count + (word.length > 0), 0);
}

function question02() {
    const s1 = prompt('Nhập vào chuỗi s1.');
    const s2 = prompt('Nhập vào chuỗi s2.');
    return s1.concat(s2);
}

function question03() {
    const name = prompt('Nhập vào tên của bạn.');
    return name.charAt(0).toLocaleUpperCase() + name.slice(1);
}

function question04() {
    const name = prompt('Nhập vào tên của bạn.');
    for (let i = 0; i < name.length; i++) {
        const char = name.charAt(i).toLocaleUpperCase();
        console.log('Ký tự thứ ' + (i + 1) + ' là: ' + char);
    }
}

function question05() {
    const lastName = prompt('Nhập vào họ của bạn.');
    const firstName = prompt('Nhập vào tên của bạn.');
    console.log(lastName + ' ' + firstName);
}

function question06() {
    const fullName = prompt('Nhập vào họ và tên của bạn.');
    const lastName = fullName.slice(0, fullName.indexOf(' '));
    const middleName = fullName.slice(
        fullName.indexOf(' ') + 1,
        fullName.lastIndexOf(' ')
    );
    const firstName = fullName.slice(fullName.lastIndexOf(' ') + 1);
    console.log('Họ là: ' + lastName);
    console.log('Tên đệm là là: ' + middleName);
    console.log('Tên là: ' + firstName);
}

function question07() {
    const fullName = prompt('Nhập vào họ và tên của bạn.');
    return fullName
        .split(' ')
        .filter(word => word.length > 0)
        .map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
        .join(' ');
}

function question08() {
    const groups = [
        'SQL',
        'Java',
        'Basic Java',
        'Basic Frontend',
        'Advanced Java'
    ];
    for (const group of groups) {
        if (group.includes('Java')) {
            console.log('Group: ' + group);
        }
    }
}

function question09() {
    const groups = [
        'SQL',
        'Java',
        'Basic Java',
        'Basic Frontend',
        'Advanced Java'
    ];
    for (const group of groups) {
        if (group == 'Java') {
            console.log('Group: ' + group);
        }
    }
}

function question10() {
    const s1 = 'word';
    const s2 = 'drow';
    return s1 == [...s2].reverse().join('');
}

function question11() {
    const string = 'This is a string';
    return [...string].reduce((count, char) => count + (char == 'a'), 0);
}

function question12() {
    const string = 'This is a string';
    let reversed = [];
    for (let i = string.length - 1; i >= 0; i--) {
        reversed.push(string[i]);
    }
    return reversed.join('');
}

function question13() {
    const string = 'I have 2 dollars';
    return /\d/.test(string);
}

function question14() {
    const string = 'VTI Academy';
    return string.replaceAll('e', '*');
}

function question15() {
    const string = '   I  am   a developer    ';
    return string
        .split(' ')
        .filter(word => word.length > 0)
        .reverse()
        .join(' ');
}

function question16() {
    const n = 3;
    const string = 'This is a string';
    const length = string.length;
    if (length % n == 0) {
        const size = length / n;
        const groups = [];
        for (let i = 0; i < size; ++i) {
            groups.push(string.slice(i * n, (i + 1) * n));
        }
        return groups;
    }
    return 'KO';
}
