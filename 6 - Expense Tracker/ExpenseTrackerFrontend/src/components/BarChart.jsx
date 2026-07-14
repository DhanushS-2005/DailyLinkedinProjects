import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { getMonthlyExpense } from "../services/expenseService";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BarChart() {

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        loadMonthlyExpense();
    }, []);

    const loadMonthlyExpense = async () => {

        try {

            const response = await getMonthlyExpense();

            const labels = response.data.map(item => item.month);
            const amounts = response.data.map(item => item.totalAmount);

            setChartData({
                labels,
                datasets: [
                    {
                        label: "Monthly Expense",
                        data: amounts,
                        backgroundColor: "#36A2EB"
                    }
                ]
            });

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="card shadow">

            <div className="card-body">

                <h5 className="mb-3">
                    Monthly Expense
                </h5>

                <Bar data={chartData} />

            </div>

        </div>

    );

}

export default BarChart;