import { ChartRouter, type ChartType } from "@commonComponents";
import type { Options } from "highcharts";

const chartType: ChartType = "pie";

const chartOptions: Options = {
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
        text: "All available Product categories",
        align: "left",
        style: {
            color: "#666666",
            fontSize: "13px",
        },
    },

    tooltip: {
        pointFormat: "{series.name}: <b>{point.y}</b>",
    },

    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                format: "{point.name}: {point.y}",
            },
        },
    },
};

const productCategoryData = [
    {
        name: "Chrome",
        y: 70,
    },
    {
        name: "Firefox",
        y: 20,
    },
    {
        name: "Edge",
        y: 10,
    },
];

export const ProductChart = () => {
    return (
        <ChartRouter
            type={chartType}
            options={chartOptions}
            data={productCategoryData}
        />
    );
};