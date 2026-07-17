import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getContact, updateContact } from "../services/contactService";

function EditContact() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    useEffect(() => {
        loadContact();
    }, []);

    const loadContact = async () => {

        const response = await getContact(id);

        setContact(response.data);

        setPreview(`http://localhost:8080/uploads/${response.data.image}`);

    };

    const handleChange = (e) => {

        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });

    };

    const handleImage = (e) => {

        const file = e.target.files[0];

        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("name", contact.name);
        formData.append("email", contact.email);
        formData.append("phone", contact.phone);
        formData.append("address", contact.address);

        if (image) {
            formData.append("image", image);
        }

        await updateContact(id, formData);

        navigate("/");

    };

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-header bg-warning">
                    <h3>Edit Contact</h3>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={contact.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={contact.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={contact.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Address</label>
                            <textarea
                                className="form-control"
                                name="address"
                                value={contact.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">

                            <label>Current Image</label>

                            <br />

                            {preview && (
                                <img
                                    src={preview}
                                    width="150"
                                    height="150"
                                    style={{
                                        borderRadius: "50%",
                                        objectFit: "cover"
                                    }}
                                />
                            )}

                        </div>

                        <div className="mb-3">

                            <label>Change Image</label>

                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={handleImage}
                            />

                        </div>

                        <button className="btn btn-primary">
                            Update Contact
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default EditContact;