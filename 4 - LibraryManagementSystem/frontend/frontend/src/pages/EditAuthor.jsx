import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAuthor, updateAuthor } from "../services/authorService";

function EditAuthor() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [author, setAuthor] = useState({
        name: ""
    });

    useEffect(() => {
        loadAuthor();
    }, []);

    const loadAuthor = async () => {

        try {

            const response = await getAuthor(id);

            setAuthor(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        });

    };

    const update = async (e) => {

        e.preventDefault();

        try {

            await updateAuthor(id, author);

            alert("Author Updated Successfully");

            navigate("/authors");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-header bg-warning">

                            <h3>Edit Author</h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={update}>

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
                                        required
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-warning"
                                >
                                    Update Author
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

export default EditAuthor;