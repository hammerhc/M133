import { decodeComponent } from "https://deno.land/x/oak@v6.3.1/util.ts";

function load() {
    fetch("api/count")
    .then( function (response) {
        return response.json();
    })
    .then ( function (data) {
        var countContainer = document.getElementById("countContainer");
        countContainer.innerHtml = `<p>${data.result}<p/>`;
    })
}