import {ChartRouter} from "@commonComponents";
import {Center, Text} from "@chakra-ui/react";
import {useAppSelector} from "@/hooks/reduxHooks.ts";
import {useMemo} from "react";
import {pieChartOptions, getColumnChartOptions} from "./chartOptions";

export const ProductChart = () => {
    const {chartData, chartType, loading} = useAppSelector((state) => state.products);

    const chartOptions = useMemo(() => {
        if (chartType === "column") {
            return getColumnChartOptions(chartData);
        }
        return pieChartOptions;
    }, [chartType, chartData]);

    if (loading) {
        return (
            <Center h="100%">
                <Text>Loading...</Text>
            </Center>
        );
    }

    if (chartData.length === 0) {
        return (
            <Center h="100%">
                <Text>No data to display</Text>
            </Center>
        );
    }

    return (
        <Center h="100%" w="100%" p="4">
            <ChartRouter
                type={chartType}
                options={chartOptions}
                data={chartData}
            />
        </Center>
    );
};