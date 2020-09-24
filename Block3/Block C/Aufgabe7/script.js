var x = true;

function load() {
    document.querySelector("#restartButton").addEventListener("click", restart);
    var tiles = document.querySelectorAll(".tile");
    for (const tile of tiles) {
        tile.addEventListener("click", tileClick);
    }
}

function tileClick(event) {
    if (event.target.innerHTML.length == 0) {
        if (x) {
            event.target.innerHTML = "X";
            x = false;
        } else {
            event.target.innerHTML = "O";
            x = true;
        }
    }
}

function restart() {
    var tiles = document.querySelectorAll(".tile");
    for (const tile of tiles) {
        tile.innerHTML = "";
    }
    x = true;
}