document.getElementById('rocket').addEventListener('click', function() {
    // Add the fly-away class
    this.classList.add('fly-away');

    // After 2 seconds, remove both fly-away and return-rocket classes
    setTimeout(() => {
        this.classList.remove('fly-away');
        this.classList.remove('return-rocket');
    }, 2000); // 2000 milliseconds (adjust as needed)
});