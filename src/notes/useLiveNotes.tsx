import { useLiveQuery } from "dexie-react-hooks";

import db from "../db";
import { TNote } from "../type";

/**
 * Get all notes and listen to changes
 */
const useLiveNotes = (): TNote[] => {
  const notes = useLiveQuery(() => db.notes.toArray(), []);
  return notes || [];
};

export default useLiveNotes;
