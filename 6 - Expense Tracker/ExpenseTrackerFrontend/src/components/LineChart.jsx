import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { getExpenses } from "../services/expenseService";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function LineChart() {

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        loadExpenseTrend();
    }, []);

    const loadExpenseTrend = async () => {

        try {

            const response = await getExpenses();

            const sorted = response.data.sort(
                (a, b) => new Date(a.date) - new Date(b.date)
            );

            const labels = sorted.map(item => item.date);
            const amounts = sorted.map(item => item.amount);

            setChartData({
                labels,
                datasets: [
                    {
                        label: "Expense Trend",
                        data: amounts,
                        borderColor: "#4BC0C0",
                        backgroundColor: "#4BC0C0",
                        fill: false,
                        tension: 0.4
                    }
                ]
            });

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="card shadow mt-4">

            <div className="card-body">

                <h5 className="mb-3">
                    Expense Trend
                </h5>

                <Line data={chartData} />

            </div>

        </div>

    );

}

export default LineChart;