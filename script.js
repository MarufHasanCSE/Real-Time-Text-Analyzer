const textArea = document.getElementById('text-input');
const wordDisplay = document.getElementById('word-count');
const charDisplay = document.getElementById('char-count');
const readDisplay = document.getElementById('reading-time');

textArea.addEventListener('input', () => {
    const text = textArea.value.trim();
    charDisplay.innerText = text.length;
    
    
    const words = text ? text.split(/\s+/).length : 0;
    wordDisplay.innerText = words;
    
    const time = Math.ceil(words / 200);
    readDisplay.innerText = time;
});

window.transformText = (type) => {
    if (type === 'upper') textArea.value = textArea.value.toUpperCase();
    if (type === 'lower') textArea.value = textArea.value.toLowerCase();
};

document.getElementById('clear-btn').addEventListener('click', () => {
    textArea.value = '';
    charDisplay.innerText = '0';
    wordDisplay.innerText = '0';
    readDisplay.innerText = '0';
});