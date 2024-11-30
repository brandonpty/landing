const editor = document.getElementById('editor');
const mensaje = document.getElementById('mensaje');
const modoBtn = document.getElementById('modo');
const toolbar = document.querySelector('.toolbar');

// Función para alternar el modo
function toggleModo() {
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
}

// Event listener para el botón de modo
modoBtn.addEventListener('click', toggleModo);

// Event listener para la barra de herramientas
toolbar.addEventListener('click', (event) => {
    const formato = event.target.dataset.formato;
    const seleccion = editor.value.substring(editor.selectionStart, editor.selectionEnd);

    switch (formato) {
        case 'h1':
            editor.value = editor.value.replace(seleccion, `<h1>${seleccion}</h1>`);
            break;
        case 'h2':
            editor.value = editor.value.replace(seleccion, `<h2>${seleccion}</h2>`);
            break;
        case 'p':
            editor.value = editor.value.replace(seleccion, `<p>${seleccion}</p>`);
            break;
        case 'b':
            editor.value = editor.value.replace(seleccion, `<b>${seleccion}</b>`);
            break;
    }
});

// Ocultar el mensaje inicial al hacer clic en el área de texto
editor.addEventListener('click', () => {
    mensaje.style.display = 'none';
});
