import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { getCategoryExpense } from "../services/expenseService";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        loadChart();
    }, []);

    const loadChart = async () => {

        try {

            const response = await getCategoryExpense();

            const labels = response.data.map(item => item.category);
            const amounts = response.data.map(item => item.totalAmount);

            setChartData({
                labels,
                datasets: [
                    {
                        label: "Expense",
                        data: amounts,
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#4BC0C0",
                            "#9966FF"
                        ]
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
                    Category Wise Expense
                </h5>

                <Pie data={chartData} />

            </div>

        </div>

    );

}

export default PieChart;