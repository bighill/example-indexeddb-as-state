import { useLiveQuery } from "dexie-react-hooks";

import dexie from "../dexie";

/**
 * Get all notes and listen to changes
 */
const useLiveNotes = () => {
  const notes = useLiveQuery(() => dexie.notes.toArray(), []);
  return notes || [];
};

export default useLiveNotes;
