import { BrowserRouter, Route, Routes } from "react-router-dom";

import { dexieClear } from "./db";
import Notes from "./notes/Notes";
import NewNote from "./notes/NewNote";
import Note from "./note/Note";

function App() {
  return (
    <BrowserRouter>
      <h1>Example IndexedDb as state</h1>

      <Routes>
        {/* 
          Home page, notes list 
        */}
        <Route
          path="/"
          element={
            <>
              <button onClick={dexieClear}>Clear DB</button>

              <br />
              <br />
              <br />

              <NewNote />
              <Notes />
            </>
          }
        />

        {/* 
          Single note page 
        */}
        <Route path="/note/:id" element={<Note />} />

        {/* 
          404, catchall 
        */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
