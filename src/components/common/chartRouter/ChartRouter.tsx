import { Chart } from "@highcharts/react";
import { PieSeries } from "@highcharts/react/series/Pie";
import { LineSeries } from "@highcharts/react/series/Line";
import { ColumnSeries } from "@highcharts/react/series/Column";
import type { Options, PointOptionsObject } from "highcharts";


export type ChartType = "pie" | "line" | "column";

type ChartData = (PointOptionsObject | number | [string, number] | [number, number])[];

interface ChartRouterProps {
    type: ChartType;
    options: Options;
    data: ChartData;
}

export const ChartRouter = ({type, options, data,}: ChartRouterProps) => {

    const renderSeries = () => {
        switch (type) {
            case "pie":
                return (
                    <PieSeries
                        data={data}
                    />
                );
            case "line":
                return (
                    <LineSeries
                        data={data}
                    />
                );
            case "column":
                return (
                    <ColumnSeries
                        data={data}
                    />
                );
            default:
                return null;
        }
    };
    return (
            <Chart options={options}>
                {renderSeries()}
            </Chart>
    );
};