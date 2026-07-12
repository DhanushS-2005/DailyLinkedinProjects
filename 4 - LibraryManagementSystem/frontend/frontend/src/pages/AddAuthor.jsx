import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addAuthor } from "../services/authorService";

function AddAuthor() {

    const navigate = useNavigate();

    const [author, setAuthor] = useState({
        name: ""
    });

    const handleChange = (e) => {

        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        });

    };

    const saveAuthor = async (e) => {

        e.preventDefault();

        try {

            await addAuthor(author);

            alert("Author Added Successfully");

            navigate("/authors");

        } catch (error) {

            console.log(error);

            alert("Failed to Add Author");

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">

                            <h3>Add Author</h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={saveAuthor}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Author Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={author.name}
                                        onChange={handleChange}
                                        placeholder="Enter Author Name"
                                        required
                                    />

                                </div>

                                <button
                                    className="btn btn-success"
                                    type="submit"
                                >
                                    Save Author
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-secondary ms-2"
                                    onClick={() => navigate("/authors")}
                                >
                                    Cancel
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AddAuthor;