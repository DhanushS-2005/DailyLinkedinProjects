import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-2">
                        <Sidebar />
                    </div>

                    <div className="col-md-10 mt-4">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/expenses" element={<Expenses />} />
                            <Route path="/add-expense" element={<AddExpense />} />
                            <Route path="/edit-expense/:id" element={<EditExpense />} />
                        </Routes>
                    </div>

                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;