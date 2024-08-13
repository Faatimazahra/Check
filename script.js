// script.js
function checkText() {
    const prohibitedWords = ["poker", "job displacement", "privacy"];
    let text = document.getElementById("userText").value.toLowerCase();
    let result = "";

    prohibitedWords.forEach(word => {
        if (text.includes(word)) {
            result += `Prohibited word found: ${word}<br>`;
        }
    });

    if (result === "") {
        result = "No prohibited words found.";
    }

    document.getElementById("result").innerHTML = result;
}
