function increment() {
    fetch("/api/increment", {
        method: "POST",
    });
}