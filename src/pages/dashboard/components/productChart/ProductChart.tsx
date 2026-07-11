import {ChartRouter, type ChartType} from "@commonComponents";
import type {Options} from "highcharts";
import {Center} from "@chakra-ui/react";
import {ProductCategoryData} from "@/mockData/prodcuctCatagory.ts";

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
                format: "{point.name}",
            },
        },
    },
};


export const ProductChart = () => {
    return (
        <Center h="100%">
            <ChartRouter
                type={chartType}
                options={chartOptions}
                data={ProductCategoryData}
            />
        </Center>
    );
};