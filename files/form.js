document.querySelectorAll('input[type="name"]').forEach(name => {
    name.addEventListener('keyup', function (event) {
        if (checkBorder(name.value, true)) {
            name.style.borderColor = "#d9ddea";

        } else {
            name.style.borderColor = "#ff6006";
        }
    });
});

document.querySelectorAll('input[type="tel"]').forEach(tel => {
    tel.addEventListener('keyup', function (event) {
        if (checkBorder(tel.value.replace(/[^0-9]/g, ""), false)) {
            tel.style.borderColor = "#D9DDEA";
        } else {
            tel.style.borderColor = "#ff6006";
        }
    });
});


var form_name_modal = document.getElementById('FormInputName')
var form_tel_modal = document.getElementById('FormInputTel')



document.querySelector('#Modal').addEventListener('hidden.bs.modal', () => {
    form_name_modal.value = '';
    form_name_modal.style.borderColor = "#d9ddea";
    form_tel_modal.value = '';
    form_tel_modal.style.borderColor = "#d9ddea";
});


document.querySelector('#Modal').addEventListener('show.bs.modal', event => {
    var button = event.relatedTarget;
    var recipient = button.getAttribute('data-bs-whatever');
    document.getElementById('form').setAttribute('data-bs-whatever', recipient);
})
// document.querySelectorAll('.openDialog').forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelector('#reqModal').showModal();
//     });
// });
// document.querySelector('.closeDialog').addEventListener('click', () => {
//     document.querySelector('#reqModal').close();
// });

function form_submit(e, formid) {
    e.preventDefault();
    var form_name, form_tel, form_type;
    if (formid == 'form') {
        form_name = document.getElementById('FormInputName').value;
        form_tel = document.getElementById('FormInputTel').value;
        form_type = document.getElementById('form').getAttribute('data-bs-whatever');
        if (check(form_name, true) && check(form_tel.replace(/[^0-9]/g, ""), false)) {
            form = new FormData();
            xhr = new XMLHttpRequest();
            form.append('form_name', form_name);
            form.append('form_type', form_type);
            form.append('form_tel', form_tel);

            xhr.open('POST', 'form-handler.php');
            xhr.send(form);
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;

                if (xhr.status === 200) {
                    document.getElementById('FormInputName').value = '';
                    document.getElementById('FormInputName').style.borderColor = "#d9ddea";
                    document.getElementById('FormInputTel').value = '';
                    document.getElementById('FormInputTel').style.borderColor = "#d9ddea";
                    var myModal = bootstrap.Modal.getInstance(document.getElementById('Modal'));
                    myModal.hide();
                    window.location.href = "https://demos.az/thanks.html";
                }
            }
        }
    } else if (formid == 'form1') {
        form_name = document.getElementById('FormInputName1').value;
        form_tel = document.getElementById('FormInputTel1').value;
        form_type = document.getElementById('form1').getAttribute('data-bs-whatever');
        if (check(form_name, true) && check(form_tel.replace(/[^0-9]/g, ""), false)) {
            form = new FormData();
            xhr = new XMLHttpRequest();
            form.append('form_name', form_name);
            form.append('form_type', form_type);
            form.append('form_tel', form_tel);

            xhr.open('POST', 'form-handler.php');
            xhr.send(form);
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;

                if (xhr.status === 200) {
                    document.getElementById('FormInputName1').value = '';
                    document.getElementById('FormInputName1').style.borderColor = "#d9ddea";
                    document.getElementById('FormInputTel1').value = '';
                    document.getElementById('FormInputTel1').style.borderColor = "#d9ddea";
                    window.location.href = "https://demos.az/thanks.html";
                }
            }
        }
    } else if (formid == 'form2') {
        form_name = document.getElementById('FormInputName2').value;
        form_tel = document.getElementById('FormInputTel2').value;
        form_type = document.getElementById('form2').getAttribute('data-bs-whatever')
        if (check(form_name, true) && check(form_tel.replace(/[^0-9]/g, ""), false)) {
            form = new FormData();
            xhr = new XMLHttpRequest();
            form.append('form_name', form_name);
            form.append('form_type', form_type);
            form.append('form_tel', form_tel);

            xhr.open('POST', 'form-handler.php');
            xhr.send(form);
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;

                if (xhr.status === 200) {
                    document.getElementById('FormInputName2').value = '';
                    document.getElementById('FormInputName2').style.borderColor = "#d9ddea";
                    document.getElementById('FormInputTel2').value = '';
                    document.getElementById('FormInputTel2').style.borderColor = "#d9ddea";
                    window.location.href = "https://demos.az/thanks.html";
                }
            }
        }
    }


}

function check(value, condition) {
    var result = false;
    if (condition) {
        // var name_reg = /^([А-я])+(( +([А-я])+$)|$)/g;
        // if (value.match(name_reg)) {
        //     result = true;
        // }
        if (value != '') {
            result = true;
        }
    } else {
        var tel_reg = /^(^8|994|\+994|)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/g;
        if (value.match(tel_reg)) {
            result = true;
        }
    }
    return result;
}

function checkBorder(value, condition) {
    var result = false;
    if (condition) {
        // var name_reg = /^([А-я])+(( +([А-я])+$)|$)/g;
        // if (value != '') {
        //     if (value.match(name_reg)) {
        //         result = true;
        //     }
        // } else {
        //     result = true;
        // }
        if (value != '') {
            result = true;
        }
    } else {
        var tel_reg = /^(^8|994|\+994|)((\d{10})|(\s\(\d{2}\)\s\d{3}\s\d{2}\s\d{2}))/g;
        if (value != '') {
            if (value.match(tel_reg)) {
                result = true;
            }
        } else {
            result = true;
        }
    }
    return result;
}

// $('body').activity({
//     'achieveTime':60
//     ,'testPeriod':10
//     ,useMultiMode: 1
//     ,callBack: function (e) {
//         ga('send', 'event', 'Activity', '60_sec');
//         yaCounterXXXXXXXXX.reachGoal('60_sec');
//     }
// });