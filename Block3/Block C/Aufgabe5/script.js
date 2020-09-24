var wordList = ["Test1"];

function load() {
    document.querySelector("#addWordButton").addEventListener("click", addWords);
    showArray();
    document.querySelector("#inputWord").focus();
}

function addWords() {
    var word = document.querySelector("#inputWord").value;
    if (word.length > 0) {
        wordList.push(word);
        document.querySelector("#inputWord").value = "";
        document.querySelector("#inputWord").focus();
    }
    showArray();
}

function showArray() {
    var wordOutput = document.querySelector("#arrayList");
    wordOutput.innerHTML = "";
    for (var i = 0; i < wordList.length; i++) {
        wordOutput.innerHTML += "<li>" + wordList[i] + "</li>"
    }
}