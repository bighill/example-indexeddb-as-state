import { IndexableType, PromiseExtended } from "dexie";

import db from "../db";
import { TNote } from "../type";

type UseUpdateNoteReturn = (note: TNote) => PromiseExtended<IndexableType>;

/**
 * Update note
 */
const useUpdateNote = (): UseUpdateNoteReturn => {
  const updateNote = (note: TNote) => db.notes.put(note);
  return updateNote;
};

export default useUpdateNote;
