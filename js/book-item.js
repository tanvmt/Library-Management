document.addEventListener("DOMContentLoaded", function () {
    fetch("../components/book-item.html") // Load book-item
        .then(response => response.text())
        .then(html => {
            document.getElementById("book-item").innerHTML = html;
        });
});