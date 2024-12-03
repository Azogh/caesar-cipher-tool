// Seleciona os elementos do DOM necessários
const rangeInput = document.getElementById('range');
const rangeLabel = document.getElementById('range-label');
const textInput = document.getElementById('text-box');
const outputTextarea = document.querySelector('.resposta textarea');
const cipherButton = document.getElementById('submit-button');
const copyButton = document.getElementById('copy-button');
const actionRadios = document.querySelectorAll('input[name="action"]');

// Atualiza o valor do label do range conforme o usuário ajusta
rangeInput.addEventListener('input', () => {
    rangeLabel.textContent = rangeInput.value;
});

// Função para aplicar a cifra de César
function caesarCipher(text, shift, action) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let char of text) {
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();

        // Verifica se o caractere está no alfabeto
        if (alphabet.includes(lowerChar)) {
            const currentIndex = alphabet.indexOf(lowerChar);
            const shiftDirection = action === 'encode' ? shift : -shift;
            const newIndex = (currentIndex + shiftDirection + 26) % 26; // Garantir índice positivo
            const newChar = alphabet[newIndex];

            // Preserva a capitalização do caractere original
            result += isUpperCase ? newChar.toUpperCase() : newChar;
        } else {
            // Mantém caracteres que não estão no alfabeto
            result += char;
        }
    }

    return result;
}

// Adiciona o evento ao botão para processar a entrada
cipherButton.addEventListener('click', () => {
    const text = textInput.value; // Texto digitado pelo usuário
    const shift = parseInt(rangeInput.value); // Valor da chave (deslocamento)
    const action = Array.from(actionRadios).find(radio => radio.checked).value; // Ação selecionada (cifrar/decifrar)

    // Verifica se o texto está preenchido
    if (text.trim() === '') {
        alert('Por favor, insira um texto para processar.');
        return;
    }

    // Processa o texto usando a cifra de César
    const result = caesarCipher(text, shift, action);

    // Exibe o resultado na textarea de saída
    outputTextarea.value = result;
});

// Evento para o botão "Copiar"
copyButton.addEventListener('click', () => {
    if (outputTextarea.value.trim() === '') {
        alert('Não há texto para copiar!');
        return;
    }

    // Copia o conteúdo da textarea para a área de transferência
    navigator.clipboard.writeText(outputTextarea.value)
        .then(() => alert('Texto copiado para a área de transferência!'))
        .catch(err => alert('Erro ao copiar: ' + err));
});