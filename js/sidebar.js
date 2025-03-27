document.addEventListener("DOMContentLoaded", function () {
    fetch("../components/sidebar.html") // Load sidebar
        .then(response => response.text())
        .then(html => {
            document.getElementById("sidebar-container").innerHTML = html;
        });
});
