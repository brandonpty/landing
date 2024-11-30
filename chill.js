const editor = document.getElementById('editor');
const mensaje = document.getElementById('mensaje');
const modoBtn = document.getElementById('modo');

// Ocultar el mensaje inicial al hacer clic en el área de texto
editor.addEventListener('click', () => {
    mensaje.style.display = 'none';
});

// Cambiar entre modo oscuro y light
modoBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        modoBtn.textContent = 'Cambiar a modo oscuro';
        editor.style.backgroundColor = '#fff';
        editor.style.color = '#333';
    } else {
        modoBtn.textContent = 'Cambiar a modo light';
        editor.style.backgroundColor = '#222';
        editor.style.color = '#eee';
    }
});
