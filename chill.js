const editor = document.getElementById('editor');
const mensaje = document.getElementById('mensaje');
const modoBtn = document.getElementById('modo');

editor.addEventListener('click', () => {
    mensaje.style.display = 'none';
});

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


const h1Btn = document.getElementById('h1');
const h2Btn = document.getElementById('h2');
const textoBtn = document.getElementById('texto');
const boldBtn = document.getElementById('bold');

h1Btn.addEventListener('click', () => {
  editor.value += '# ';
});

h2Btn.addEventListener('click', () => {
  editor.value += '## ';
});

textoBtn.addEventListener('click', () => {
  editor.value += ''; 
});

boldBtn.addEventListener('click', () => {
  const seleccion = editor.value.substring(editor.selectionStart, editor.selectionEnd);
  editor.value = editor.value.replace(seleccion, `**${seleccion}**`);
});
