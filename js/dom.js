// let elements = document.getElementsByName('chk_interest');

// let checked_items = [];

// for (let i = 0; i <option elements.length; i++) {
//     if (elements[i].checked) {
//         checked_items.push(elements[i]);
//     }
// }

// let elements2 = document.querySelectorAll('[name=chk_interest]:checked');

// console.log(elements2);

// var oText1 = document.getElementById('text1');
// var textValue = oText1.value;
// console.log(textValue);
// console.log(document.getElementById("text1").getAttribute("value"));

// console.log(oText1.hasAttribute('value'));
// console.log(oText1.hasAttribute('data-role'));

// oText1.removeAttribute('data-role');
// console.log(oText1.hasAttribute('value'));

// function myFunction() {
//     console.log('onclick 이벤트 설정');
// }

// function myFunction2() {
//     console.log('이벤트 리스너 사용');
// }

// document.getElementById('btn').addEventListener('click', myFunction);
// document.getElementById('btn2').addEventListener('click', function () {
//     console.log('이벤트 함수 실행');
// });

// document.getElementById('title').innerText = '제목 입니다.';
// var sel = document.getElementById('sel');
// sel.innerHTML = '<option value="">선택하세요</option>';

function doChange() {
    let selectedValue = document.getElementById('select1').value;
    console.log(selectedValue);
}

doFocus = () => console.log('doFocus');

function doBlur(a) {
    if (a.value == '') {
        alert('필수값 입니다 입력하세요.');
    }
    console.log(a.value);
}
