{
const toggle = document.getElementById('toggleDark');
const body = document.body;
const change = document.getElementsByClassName("change");

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    
    if (this.classList.contains('bi-moon')) {
        // Dark mode
        body.style.background = 'black';
        body.style.transition = '2s';
        changeTextColors('white');
    } else {
        // Light mode
        body.style.background = 'white';
        body.style.transition = '2s';
        changeTextColors('black');
    }
});

function changeTextColors(color) {
    for (let i = 0; i < change.length; i++) {
        change[i].style.color = color;
    }
}
}