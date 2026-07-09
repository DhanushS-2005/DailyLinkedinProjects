import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import ViewStudent from "./pages/ViewStudent";
import EditStudent from "./pages/EditStudent";


function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1">
          <Navbar />

          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/add-student" element={<AddStudent />} />
              <Route path="/edit-student/:id" element={<EditStudent />} />
              <Route path="/view-student/:id" element={<ViewStudent />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;