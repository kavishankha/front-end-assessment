import type {Options} from "highcharts";

export const pieChartOptions: Options = {
    chart: {
        backgroundColor: "#ffffff",
    },
    title: {
        text: "Product Categories",
        align: "left",
        style: {
            color: "#000000",
            fontSize: "18px",
            fontWeight: "bold",
        },
    },
    subtitle: {
        text: "All available products categories",
        align: "left",
        style: {
            color: "#666666",
            fontSize: "13px",
        },
    },
    tooltip: {
        pointFormat: "{series.name}: <b>${point.y:.2f}</b>",
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                format: "{point.name}",
            },
        },
    },
};
