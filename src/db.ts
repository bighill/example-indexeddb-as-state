import Dexie, { Table } from "dexie";
import { TNote } from "./type";

/**
 * Dexie schema
 */
class DexieDb extends Dexie {
  notes!: Table<TNote>;

  constructor() {
    super("foo");
    this.version(1).stores({
      notes: "++id",
    });
  }
}

/**
 * Dexie instance
 */
const db = new DexieDb();
export default db;

/**
 * Clear all models
 */
export const dexieClear = (): void => {
  db.notes.clear();
};
