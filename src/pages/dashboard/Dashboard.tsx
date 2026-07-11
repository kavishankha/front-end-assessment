import {ColumnChart, Filter, PieChart} from "@dashboardComponents";

export const Dashboard = () => {
    return <div>
        <Filter/>
        <PieChart/>
        <ColumnChart/>
        <text>this is dashboard</text>
    </div>;
};