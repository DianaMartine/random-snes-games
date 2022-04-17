const btn = document.querySelector('.btn-theme-toggle');
const theme = document.querySelector('#theme-link');

btn.addEventListener('click', () => {
    if (theme.getAttribute('href') === '') {
        theme.setAttribute('href', 'darkMode.css');
        btn.innerHTML = `
        <span>🌞</span>
        `;
    } else {
        theme.setAttribute('href', '');
        btn.innerHTML = `
        <span>🌙</span>
        `;
    }
});