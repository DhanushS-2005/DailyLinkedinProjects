import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddNote />} />
      <Route path="/edit/:id" element={<EditNote />} />
    </Routes>
  );
}

export default App;