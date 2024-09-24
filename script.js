function checkText() {
    const prohibitedWords = [
        "blackjack", "baccarat", "pai gow poker", "poker", "roulette", 
        "card game", "sport betting", "slot game", "dice game", 
        "gambling", "porn", "porn toys", 
        "scam", "legit", 
        "casino", "solitaire", "cards game", 
        "bankroll", "face cards", "high roller", "racism"
    ];

    let text = document.getElementById("userText").value;
    const lines = text.split('\n');
    let result = "";

    prohibitedWords.forEach(word => {
        const regex = new RegExp(`(${word})`, 'gi');
        text = text.replace(regex, '<span class="highlight">$1</span>');

        lines.forEach((line, index) => {
            if (line.toLowerCase().includes(word.toLowerCase())) {
                result += `- "${word}" (on line ${index + 1})<br>`;
            }
        });
    });

    if (result === "") {
        result = "No prohibited words found.";
    }

    document.getElementById("result").innerHTML = result;
    document.getElementById("userText").innerHTML = text;
}
