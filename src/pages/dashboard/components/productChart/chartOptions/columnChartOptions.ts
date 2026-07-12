import type {Options} from "highcharts";
import type {ChartDataPoint} from "@/store/products/productTypes.ts";

export const getColumnChartOptions = (data: ChartDataPoint[]): Options => ({
    chart: {
        backgroundColor: "#ffffff",
    },
    title: {
        text: "Product Report",
        align: "left",
        style: {
            color: "#000000",
            fontSize: "18px",
            fontWeight: "bold",
        },
    },
    subtitle: {
        text: "Generated report data",
        align: "left",
        style: {
            color: "#666666",
            fontSize: "13px",
        },
    },
    tooltip: {
        pointFormat: "<b>${point.y:.2f}</b>",
    },
    plotOptions: {
        column: {
            dataLabels: {
                enabled: true,
                format: "${point.y:.2f}",
            },
        },
    },
    xAxis: {
        categories: data.map(d => d.name),
        labels: {
            rotation: -45,
            style: {
                fontSize: "10px",
            },
        },
    },
    yAxis: {
        title: {
            text: "Price ($)",
        },
    },
});
