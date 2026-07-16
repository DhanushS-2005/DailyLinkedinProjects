import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import { getNotes, deleteNote } from "../services/noteService";

function Home() {

  const [notes, setNotes] = useState([]);

  const loadNotes = () => {
    getNotes()
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this note?")) return;

    await deleteNote(id);

    loadNotes();

  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6">
          My Notes
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={handleDelete}
            />
          ))}

        </div>

      </div>
    </>
  );
}

export default Home;