function wordCount(text) {
    var words = text.replace(/[\.,!?\(\)]/g, "").split(" ");
    var wordObj = {};
    for (var word of words) {
        if (wordObj[word]) {
            wordObj[word]++
        } else {
            wordObj[word] = 1;
        }
    }
    var result = [];
    for (var word in wordObj) {
        var count = wordObj[word];
        result = [
            ...result,
            {word: word, count: count}
        ]
    }
    console.log(result);
}
wordCount("Hallo das ist ein Text, Hallo");