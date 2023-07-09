import dexie from "../dexie";
import { TNote } from "../type";

/**
 * Update note
 */
const useUpdateNote = () => {
  const updateNote = (note: TNote) => dexie.notes.put(note);
  return updateNote;
};

export default useUpdateNote;
