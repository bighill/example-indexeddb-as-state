import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./notes/Notes";
import Note from "./note/Note";
import NewNote from "./notes/NewNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
          Home page, notes list 
        */}
        <Route
          path="/"
          element={
            <>
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
