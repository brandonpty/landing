const notas = document.getElementById('notas');
const modoBtn = document.getElementById('modo');

modoBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
