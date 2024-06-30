const toggler = document.getElementById('theme-checkbox');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
    }
});