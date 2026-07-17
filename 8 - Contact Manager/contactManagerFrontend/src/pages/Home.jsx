import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteContact, getContacts } from "../services/contactService";

function Home() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        loadContacts();
    }, []);

    const loadContacts = async () => {
        const response = await getContacts();
        setContacts(response.data);
    };

    const removeContact = async (id) => {

        if (window.confirm("Delete this contact?")) {

            await deleteContact(id);

            loadContacts();

        }
    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">All Contacts</h2>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>

                </thead>

                <tbody>

                {contacts.map((contact) => (

                    <tr key={contact.id}>

                        <td>{contact.id}</td>

                        <td>

                            <img
                                src={`http://localhost:8080/uploads/${contact.image}`}
                                width="70"
                                height="70"
                                style={{objectFit:"cover",borderRadius:"50%"}}
                            />

                        </td>

                        <td>{contact.name}</td>

                        <td>{contact.email}</td>

                        <td>{contact.phone}</td>

                        <td>{contact.address}</td>

                        <td>

                            <Link
                                to={`/edit/${contact.id}`}
                                className="btn btn-warning btn-sm me-2"
                            >
                                Edit
                            </Link>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => removeContact(contact.id)}
                            >
                                Delete
                            </button>

                        </td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>

    );
}

export default Home;