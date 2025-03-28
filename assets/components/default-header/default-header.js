document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/components/default-header/default-header.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("default-header").innerHTML = html;
        });
});