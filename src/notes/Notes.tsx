import { Link } from "react-router-dom";

import useLiveNotes from "./useLiveNotes";

/**
 * Notes component
 */
const Notes = () => {
  const notes = useLiveNotes();

  return (
    <div>
      {notes?.map((note) => (
        <div key={note.id}>
          <Link to={`/note/${note.id}`}>{note.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Notes;
