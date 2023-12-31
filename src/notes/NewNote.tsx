import { useState } from "react";

import { TNote } from "../type";
import db from "../db";

/**
 * New note component
 */
const NewNote = () => {
  const [title, setTitle] = useState("");

  /**
   * Handle submit
   */
  const handleSubmit = async (
    ev: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    ev.preventDefault();

    const note: TNote = {
      id: Date.now().toString(),
      title: title,
      content: "",
    };

    await db.notes.add(note);
    setTitle("");
  };

  /**
   * Render
   */
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        placeholder="New note"
      />
      <button type="submit">Add note</button>
    </form>
  );
};

export default NewNote;
