import { IndexableType } from "dexie";

import db from "../db";
import { TNote } from "../type";

type UseCreateNoteReturn = (note: TNote) => Promise<IndexableType>;

/**
 * Create a new note
 */
const useCreateNote = (): UseCreateNoteReturn => {
  const addNote = async (note: TNote) => {
    return await db.notes.add(note);
  };

  return addNote;
};

export default useCreateNote;
