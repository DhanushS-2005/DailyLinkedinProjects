import { useEffect, useState } from "react";
import { getDashboardSummary } from "../services/expenseService";
import SummaryCard from "../components/SummaryCard";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";

function Dashboard() {

    const [summary, setSummary] = useState({
        totalExpense: 0,
        totalTransactions: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const response = await getDashboardSummary();
            setSummary(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container">

    <h2 className="mb-4">
        Dashboard
    </h2>

    <div className="row">

        <SummaryCard
            title="Total Expense"
            value={`₹ ${summary.totalExpense}`}
            color="primary"
        />

        <SummaryCard
            title="Total Transactions"
            value={summary.totalTransactions}
            color="success"
        />

    </div>

    <div className="row mt-4">

        <div className="col-lg-6">

            <PieChart />

        </div>

        <div className="col-lg-6">

            <BarChart />

        </div>

    </div>

    <LineChart />

</div>

    );

}

export default Dashboard;