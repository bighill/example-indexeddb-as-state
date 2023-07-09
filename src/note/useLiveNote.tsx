import { useLiveQuery } from "dexie-react-hooks";

import db from "../db";
import { TNote } from "../type";

/**
 * Get note and listen to changes
 */
const useLiveNote = (id: string | undefined): TNote | undefined => {
  const note = useLiveQuery(() => db.notes.get(id || ""), [id]);
  return note;
};

export default useLiveNote;
