import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addContact } from "../services/contactService";

function AddContact() {

    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleImage = (e) => {

        const file = e.target.files[0];

        setImage(file);

        setPreview(URL.createObjectURL(file));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("name", contact.name);
        formData.append("email", contact.email);
        formData.append("phone", contact.phone);
        formData.append("address", contact.address);
        formData.append("image", image);

        await addContact(formData);

        navigate("/");

    };

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-header bg-dark text-white">
                    <h3>Add Contact</h3>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Address</label>
                            <textarea
                                className="form-control"
                                name="address"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Profile Image</label>

                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={handleImage}
                                required
                            />
                        </div>

                        {preview && (

                            <div className="mb-3 text-center">

                                <img
                                    src={preview}
                                    width="150"
                                    height="150"
                                    style={{
                                        borderRadius: "50%",
                                        objectFit: "cover"
                                    }}
                                />

                            </div>

                        )}

                        <button className="btn btn-success">
                            Save Contact
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default AddContact;