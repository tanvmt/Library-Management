window.onload = function () {
    var canvas = document.getElementById("category-chart");
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }

    var ctx = canvas.getContext("2d");

    if (window.myChart instanceof Chart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, { 
        type: "bar",
        data: {
            labels: ["Fiction", "Science", "History", "Biography", "Fantasy"],
            datasets: [{
                backgroundColor: ["red", "green", "blue", "orange", "brown"],
                data: [7, 5, 3, 2, 2]
            }]
        },
        options: {
            legend: { display: false },
            // maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: { beginAtZero: true }
                }]
            }
        }
    });
};
