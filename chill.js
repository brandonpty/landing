const modoBtn = document.getElementById('modo');

// Función para alternar el modo
function toggleModo() {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        modoBtn.textContent = 'Cambiar a modo oscuro';
    } else {
        modoBtn.textContent = 'Cambiar a modo light';
    }
}

// Event listener para el botón de modo
modoBtn.addEventListener('click', toggleModo);

tinymce.init({
    selector: '#editor',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advlist advcode editimage advtable footnotes mergetags tableofcontents autocorrect',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
        { value: 'First.Name', title: 'First Name' },
        { value: 'Email', title: 'Email' },
    ]
});
