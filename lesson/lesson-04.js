// JQuery
// Cú pháp: $(selector).action();

// JavaScript DOM => JQuery DOM
// document.getElementById('demo')          => $('#demo')
// document.getElementsByClassName('red')   => $('.red')
// document.getElementsByTagName('p')       => $('p')

// JavaScript Event
// addEventListener('click', function (event) {
//     ...
// });

// JQuery Event
// on('click', function (event) {
//     ...
// });

// hide: Ẩn phần tử
// VD: $('p').hide();
// show: Hiển thị phẩn tử
// VD: $('p').show();
// toggle: Ẩn / hiện phần tử
// VD: $('p').toggle();

// HTML Manipulation
// append: Thêm HTML vào cuối
// prepend: Thêm HTML vào đầu
// remove: Xóa phần tử đó khỏi giao diện
// empty: Xóa tất cả nội dung bên trong nó

// text: set / get nội dung giữa thẻ đóng và thẻ mở
// val: set / get giá trị của thẻ input

// CSS Manipulation
// css(property, value): Thêm thuộc tính css

// RestfulAPI: GET, POST, PUT, DELETE

const tbody = $('#tbody');
const loading = $('#loading');

// Lắng nghe DOM Loaded
$(function () {
    addListeners();
    loadDepartments();
});

function loadDepartments() {
    $.ajax({
        method: 'GET',
        url: 'https://63500319df22c2af7b609f3f.mockapi.io/api/v1/departments',
        beforeSend: function () {
            showLoading();
        },
        complete: function () {
            hideLoading();
        },
        success: function (data) {
            showDepartments(data);
        }
    });
}

function createDepartment() {
    $.ajax({
        method: 'POST',
        url: 'https://63500319df22c2af7b609f3f.mockapi.io/api/v1/departments',
        data: {
            name: $('#create-name').val()
        },
        beforeSend: function () {
            showLoading();
            bootstrap.Modal.getOrCreateInstance($('#modal-create')).hide();
        },
        complete: function () {
            hideLoading();
        },
        success: function (data) {
            showDepartment(data);
        }
    });
}

function updateDepartment() {
    const selectedRow = $('.selected');
    const id = $('#update-id').val();
    $.ajax({
        method: 'PUT',
        url: 'https://63500319df22c2af7b609f3f.mockapi.io/api/v1/departments/' + id,
        data: {
            name: $('#update-name').val()
        },
        beforeSend: function () {
            showLoading();
            bootstrap.Modal.getOrCreateInstance($('#modal-update')).hide();
        },
        complete: function () {
            hideLoading();
        },
        success: function (data) {
            selectedRow.hide('fast', function () {
                selectedRow.find('.name').text(data.name);
                selectedRow.show();
            });
        }
    });
}

function deleteDepartment() {
    const selectedRow = $('.selected');
    const id = selectedRow.find('.id').text();
    $.ajax({
        method: 'DELETE',
        url: 'https://63500319df22c2af7b609f3f.mockapi.io/api/v1/departments/' + id,
        beforeSend: function () {
            showLoading();
            bootstrap.Modal.getOrCreateInstance($('#modal-delete')).hide();
        },
        complete: function () {
            hideLoading();
        },
        success: function (data) {
            selectedRow.remove();
        }
    });
}

function showDepartments(departments) {
    for (const department of departments) {
        showDepartment(department);
    }
}

function showDepartment(department) {
    const createdAt = new Date(department.createdAt);
    tbody.append(`
        <tr>
            <th class="id" scope="row">${department.id}</th>
            <td class="name">${department.name}</td>
            <td class="createdAt">${createdAt.toLocaleString()}</td>
        </tr>
    `);
}

function editDepartment() {
    const selectedRow = $('.selected');
    const id = selectedRow.find('.id').text();
    $('#update-id').val(id);
    const name = selectedRow.find('.name').text();
    $('#update-name').val(name);
}

function addListeners() {
    tbody.on('click', 'tr', function (event) {
        if (event.ctrlKey) {
            $(this).addClass('selected');
        } else {
            $(this).addClass('selected').siblings().removeClass('selected');
        }
    });

    $('#btn-add').on('click', function (event) {
        $('#create-form').trigger('reset');
    });

    $('#btn-edit').on('click', function (event) {
        editDepartment();
    });

    $('#btn-create').on('click', function (event) {
        createDepartment();
    });

    $('#btn-update').on('click', function (event) {
        updateDepartment();
    });

    $('#btn-delete').on('click', function (event) {
        deleteDepartment();
    });
}

function showLoading() {
    loading.show();
}

function hideLoading() {
    loading.hide();
}
