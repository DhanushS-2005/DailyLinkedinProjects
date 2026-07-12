import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import AddAuthor from "./pages/AddAuthor";
import AddBook from "./pages/AddBook";
import EditAuthor from "./pages/EditAuthor";
import EditBook from "./pages/EditBook";

function App() {

    return (

        <>
            <Navbar />

            <div className="container mt-4">

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/authors" element={<Authors />} />

                    <Route path="/books" element={<Books />} />

                    <Route path="/add-author" element={<AddAuthor />} />

                    <Route path="/add-book" element={<AddBook />} />

                    <Route path="/edit-author/:id" element={<EditAuthor />} />

                    <Route path="/edit-book/:id" element={<EditBook />} />

                </Routes>

            </div>

        </>

    );

}

export default App;