import { Link, useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import useLiveNote from "./useLiveNote";
import useUpdateNote from "./useUpdateNote";

/**
 * Note component
 */
const Note = () => {
  const { id } = useParams();
  const dbNote = useLiveNote(id);
  const [note, setNote] = useState(dbNote);
  const updateNote = useUpdateNote();

  /**
   * Set note data
   */
  useEffect(() => {
    dbNote && setNote(dbNote);
  }, [dbNote]);

  /**
   * Handle content change
   */
  const handleContentChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    const content = ev.target.value;

    setNote((prev) => {
      // Previous note is initially undefined
      if (!prev) {
        return undefined;
      }

      // New note
      const _note = { ...prev, content };

      // Update db
      updateNote(_note);

      // Update state
      return _note;
    });
  };

  /**
   * Handle title change
   */
  const handleTitleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const title = ev.target.value;

    setNote((prev) => {
      // Previous note is initially undefined
      if (!prev) {
        return undefined;
      }

      // New note
      const _note = { ...prev, title };

      // Update db
      updateNote(_note);

      // Update state
      return _note;
    });
  };

  /**
   * Render
   */
  return note ? (
    <>
      <Link to="/">Back</Link>

      <br />
      <br />
      <br />

      <small>EDIT TITLE</small>

      <form>
        <input value={note?.title} onChange={handleTitleChange} />
      </form>

      <p>
        <strong>{note?.title}</strong>
      </p>

      <br />
      <br />

      <small>EDIT CONTENT</small>

      <form>
        <textarea value={note?.content} onChange={handleContentChange} />
      </form>

      <p>{note?.content}</p>
    </>
  ) : null;
};

export default Note;
