import dexie from "../dexie";
import { TNote } from "../type";
import { useLiveQuery } from "dexie-react-hooks";

/**
 * Get note and listen to changes
 */
const useLiveNote = (id: string | undefined): TNote | undefined => {
  const note = useLiveQuery(() => dexie.notes.get(id || ""), [id]);
  return note;
};

export default useLiveNote;
