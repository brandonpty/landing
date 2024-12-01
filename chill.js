function toggleMode() {
  document.body.classList.toggle('light-mode');
}

function makeBold() {
  let textarea = document.getElementById("notepad");
  let selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
  if (selectedText) {
    let newText = textarea.value.substring(0, textarea.selectionStart) + 
                   "<b>" + selectedText + "</b>" + 
                   textarea.value.substring(textarea.selectionEnd);
    textarea.value = newText;
  }
}
