import { Link } from "react-router-dom";

function NoteCard({ note, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5">

      <h2 className="text-xl font-bold mb-3">
        {note.title}
      </h2>

      <div
        className="text-gray-700 mb-5"
        dangerouslySetInnerHTML={{
          __html:
            note.content.length > 200
              ? note.content.substring(0, 200) + "..."
              : note.content,
        }}
      />

      <div className="flex gap-3">

        <Link
          to={`/edit/${note.id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(note.id)}
          className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default NoteCard;