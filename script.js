const toggler = document.getElementById('theme-checkbox');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
    }
});

const hamburgerMenu = document.querySelector('.menu');







// OPTIONAL LIGHT MODE BASED ON THE SYSTEM PREFERENCE (BUG)

// // Apply theme based on the system preference
// function applyTheme(theme) {
//     if (theme === 'light') {
//         document.documentElement.setAttribute('data-theme', 'light');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
// }

// // Check system preference
// const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
// applyTheme(darkModeMediaQuery.matches ? 'light' : 'dark');

// // Listen for changes in system preference
// darkModeMediaQuery.addEventListener('change', (event) => {
//     applyTheme(event.matches ? 'light' : 'dark');
// });

// // Toggle theme based on checkbox
// const themeCheckbox = document.getElementById('theme-checkbox');
// themeCheckbox.addEventListener('change', (event) => {
//     if (event.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'light');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
// });
