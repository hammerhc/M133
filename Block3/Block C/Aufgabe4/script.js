function load() {
    document.querySelector("#inputSubmit").addEventListener("click", calculate);
}

function calculate() {
    var screws = document.querySelector("#inputScrew").value;
    var nuts = document.querySelector("#inputNut").value;
    var grommets = document.querySelector("#inputGrommet").value;
    var resultInput = document.querySelector("#inputResult");

    var result = parseInt(screws ? screws : 0) * 0.2 + parseInt(nuts ? nuts : 0) * 0.1 + parseInt(grommets ? grommets : 0) * 0.05;
    resultInput.value = Math.round((result + Number.EPSILON) * 100) / 100;
}