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
   *
   * Notice this doesn't use `setNote` to update state.
   * Instead, it just updates the local DB directly.
   * The live listeners will catch the change and update the DOM.
   */
  const handleContentChange = (ev: ChangeEvent<HTMLTextAreaElement>): void => {
    const content = ev.target.value;

    // Previous note is initially undefined
    if (!note) {
      return;
    }

    // New note
    const _note = { ...note, content };

    // Update db
    updateNote(_note);
  };

  /**
   * Handle title change
   *
   * Notice this doesn't use `setNote` to update state.
   * Instead, it just updates the local DB directly.
   * The live listeners will catch the change and update the DOM.
   */
  const handleTitleChange = (ev: ChangeEvent<HTMLInputElement>): void => {
    const title = ev.target.value;

    // Previous note is initially undefined
    if (!note) {
      return;
    }

    // New note
    const _note = { ...note, title };

    // Update db
    updateNote(_note);
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
