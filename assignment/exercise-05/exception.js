function question01() {
    'use strict';
    const fruits = ['Banana'];
    if (2 in fruits) {
        console.log(fruits[2]);
    }
}

function question02() {
    const fruits = ['Banana', 'Orange', 'Mango'];

    function getIndex(index) {
        if (0 <= index && index < fruits.length) {
            console.log(fruits[index]);
        } else {
            console.log('Can not find fruit.');
        }
    }

    getIndex(1);
}

question01();
