function replaceString() {
    var oldString = document.querySelector("#oldString");
    var newString = document.querySelector("#newString");

    newString.textContent = oldString.textContent.replace("Hinz", "Kunz, geb. Hinz");
}