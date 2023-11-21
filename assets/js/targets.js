const a = document.getElementsByClassName('button_1');
const b = document.getElementsByClassName('targeting');

for (var i = 0; i < a.length; i++) {
    if (parseInt(b[i].innerHTML) != 0) {
        a[i].style.display = 'none';
    }
}