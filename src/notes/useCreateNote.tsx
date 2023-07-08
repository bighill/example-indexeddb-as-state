import dexie from "../dexie";
import { TNote } from "../type";

/**
 * Create a new note
 */
const useCreateNote = () => {
  const addNote = async (note: TNote) => {
    return await dexie.notes.add(note);
  };

  return addNote;
};

export default useCreateNote;
