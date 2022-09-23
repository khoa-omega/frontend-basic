$(function() {
    addListeners();
    loadAllDepartments();
});

function addListeners() {
    $('#tbody').on('click', 'tr', function(event) {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    $('#btn-delete').on('click', function(event) {
        deleteDepartments();
    });

    $('#btn-create').on('click', function(event) {
        createDepartment();
    });

    $('#btn-update').on('click', function(event) {
        updateDepartment();
    });

    $('#btn-edit').on('click', function(event) {
        debugger
        const selectedRow = $('.selected');
        $('#update-id').val(selectedRow.find('.id').text());
        $('#update-name').val(selectedRow.find('.name').text());
    });
}

function updateDepartment() {
    const id = $('#update-id').val();

    $.ajax({
        method: 'PUT',
        url: 'https://62e8c82601787ec7120a5cc2.mockapi.io/departments/' + id,
        data: {
            id: id,
            name: $('#update-name').val()
        },
        success: function(data) {
            $('.selected').hide(function() {
                $('.selected').find('.name').text(data.name);
                $('.selected').show();
            })
        }
    });
}

function createDepartment() {
    $.ajax({
        method: 'POST',
        url: 'https://62e8c82601787ec7120a5cc2.mockapi.io/departments',
        data: {
            name: $('#form-name').val()
        },
        success: function(data) {
            showDepartment(data);
        }
    });
}

function deleteDepartments() {
    const id = $('.selected').find('.id').text();
    $.ajax({
        method: 'DELETE',
        url: 'https://62e8c82601787ec7120a5cc2.mockapi.io/departments/' + id,
        success: function(data) {
            $('.selected').remove();
        }
    });
}

function loadAllDepartments() {
    $.ajax({
        method: 'GET',
        url: 'https://62e8c82601787ec7120a5cc2.mockapi.io/departments',
        beforeSend: function() {
            showLoading();
        },
        success: function(data) {
            showAllDepartments(data);
        },
        complete: function() {
            hideLoading();
        }
    });
}

function showAllDepartments(departments) {
    const tbody = $('#tbody');
    for (const department of departments) {
        tbody.append(`
            <tr>
                <th class='id'>${department.id}</th>
                <td class='name'>${department.name}</td>
                <td class='created-at'>${department.createdAt}</td>
            </tr>
        `);
    }
}

function showDepartment(department) {
    $('#tbody').append(`
        <tr>
            <th class='id'>${department.id}</th>
            <td class='name'>${department.name}</td>
            <td class='created-at'>${department.createdAt}</td>
        </tr>
    `);
}

function hideLoading() {

}

function showLoading() {

}