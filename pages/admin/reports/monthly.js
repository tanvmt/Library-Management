document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("monthly-chart");
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }

    var ctx = canvas.getContext("2d");

    if (window.myChart instanceof Chart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                label: "Borrowings",
                borderColor: "blue",
                fill: false,
                data: [10, 20, 30, 40, 50, 60]
            }, {
                label: "Returns",
                borderColor: "green",
                fill: false,
                data: [5, 10, 15, 20, 25, 30]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: { beginAtZero: true }
                }]
            }
        }
    });
});