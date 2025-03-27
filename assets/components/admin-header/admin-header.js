document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/components/admin-header/admin-header.html") // Load admin-header
        .then(response => response.text())
        .then(html => {
            document.getElementById("admin-header").innerHTML = html;
        });
});