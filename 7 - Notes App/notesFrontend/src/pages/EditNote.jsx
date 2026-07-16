import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill-new";
import Navbar from "../components/Navbar";
import { getNote, updateNote } from "../services/noteService";

function EditNote() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  useEffect(() => {

    getNote(id).then((res) => {

      setTitle(res.data.title);

      setContent(res.data.content);

    });

  }, [id]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    await updateNote(id, {
      title,
      content,
    });

    navigate("/");

  };

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">

        <h2 className="text-3xl font-bold mb-6">
          Edit Note
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            className="w-full border rounded p-3 mb-5"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="mb-6 h-64"
          />

          <div className="mt-16">

            <button
              className="bg-green-600 text-white px-6 py-3 rounded"
            >
              Update Note
            </button>

          </div>

        </form>

      </div>
    </>
  );
}

export default EditNote;