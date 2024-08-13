// script.js
function checkText() {
    const prohibitedWords = ["poker", "job displacement", "privacy"];
    const text = document.getElementById("userText").value.toLowerCase();
    const lines = text.split('\n');
    let result = "";

    lines.forEach((line, index) => {
        prohibitedWords.forEach(word => {
            if (line.includes(word)) {
                result += `Prohibited word found: "${word}" on line ${index + 1}<br>`;
            }
        });
    });

    if (result === "") {
        result = "No prohibited words found.";
    }

    document.getElementById("result").innerHTML = result;
}
