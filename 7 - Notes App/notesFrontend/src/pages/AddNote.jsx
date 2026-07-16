import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import Navbar from "../components/Navbar";
import { addNote } from "../services/noteService";

function AddNote() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = {
      title,
      content,
    };

    await addNote(note);

    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">

        <h2 className="text-3xl font-bold mb-6">
          Add New Note
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-3 mb-5"
            required
          />

          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="mb-6 h-64"
          />

          <div className="mt-16">

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Save Note
            </button>

          </div>

        </form>

      </div>
    </>
  );
}

export default AddNote;