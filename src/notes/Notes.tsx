import { Link } from "react-router-dom";

import useLiveNotes from "./useLiveNotes";

/**
 * Notes component
 */
const Notes = () => {
  const notes = useLiveNotes();

  /**
   * Render
   */
  return (
    <div>
      {notes?.map((note) => (
        <Link key={note.id} to={`/note/${note.id}`} className="list">
          {note.title}
        </Link>
      ))}
    </div>
  );
};

export default Notes;
