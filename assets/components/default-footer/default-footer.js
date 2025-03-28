document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/components/default-footer/default-footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("default-footer").innerHTML = html;
        });
});