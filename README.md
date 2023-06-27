# Example IndexedDb as State

A POC using IndexedDb for state management.

## Dexie to store models.

Use the live listeners in Dexie to update DOM.

## Supabase should be optional.

Enable if credentials are added to env.
Auth, PG, and realtime listeners.

## Sync service.

Sync status check.

- FE --> BE : get sync keys/modified_at
- FE hits BE for only stale models

FE IN: adequate sync & Supabase realtime updates.
FE OUT: mirror CRUD to Dexie & Supabase.
