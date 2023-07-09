import { useEffect, useState } from "react";
import dexie from "../dexie";
import { TNote } from "../type";

// TODO possibly deprecate this hook

/**
 * Get note
 */
const useReadNote = (id: string | undefined): TNote | null => {
  const [note, setNote] = useState<TNote | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    dexie.notes.get(id).then((note) => {
      const n = note ? (note as TNote) : null;
      // console.log({ n });
      setNote(n);
    });
  }, [id]);

  return note;
};

export default useReadNote;
