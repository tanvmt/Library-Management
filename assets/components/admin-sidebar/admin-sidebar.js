document.addEventListener("DOMContentLoaded", function () {
    // Load sidebar trước khi thao tác với nó
    fetch("/assets/components/admin-sidebar/admin-sidebar.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("admin-sidebar").innerHTML = html;
            highlightActiveButton();
        })
        .catch(error => console.error("Lỗi khi tải sidebar:", error));

    function highlightActiveButton() {
        const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
        const menuItems = {
            "dashboard": "dashboard",
            "books": "books",
            "users": "users",
            "borrowings": "borrowings",
            "reports": "reports",
            "settings": "settings"
        };

        if (menuItems[currentPage]) {
            const activeButton = document.getElementById(menuItems[currentPage]);
            if (activeButton) {
                activeButton.classList.add("active");
            } else {
                console.warn("Không tìm thấy phần tử:", menuItems[currentPage]);
            }
        }
    }
});
