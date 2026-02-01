const textInput = document.getElementById("textInput");
const wordCountDisplay = document.getElementById("wordCount");
const WORD_LIMIT = 150;

textInput.addEventListener("input", () => {
    let words = textInput.value
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 0);

    if (words.length > WORD_LIMIT) {
        textInput.value = "";
        wordCountDisplay.textContent = "0/150 Words";
        return;
    }

    wordCountDisplay.textContent = `${words.length}/150 Words`;
});