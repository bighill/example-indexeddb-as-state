# Example IndexedDb as State

A POC for using IndexedDb to manage state.

The example here is a simple note taking app to test CRUD operations.
Dexie is used for easier interaction with IndexedDb.
Also Dexie provides live listeners that allow React to see changes in IndexedDb and rerender.

## Why?

- This technique acts as a replacement for state tools like Redux or Context.
- Personally, I think it's easier to manage than most common state tools.

Advantages

- State remains stored in the browser
- Good for web apps that benefit from persistent data storage

Disadvantages

- State remains stored in the browser
- Bad for more traditional web sites have no need for data to persist in the browser
