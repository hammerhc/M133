function load() {
    var emailDiv = document.querySelector(".email");
    var email = "";
    for (var childElement of emailDiv.children) {
        if (childElement.innerHTML.endsWith(".ch")) {
            email = childElement.innerHTML;
        }
        else {
            email = "mailto:" + childElement.innerHTML + "@" + email;
        }
    }
    emailDiv.innerHTML = "<a href=" + email + ">Mail</a>";
}