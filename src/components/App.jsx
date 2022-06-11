import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";
import { useState, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  const renderNotes = notes.map((note, index) => {
    return (
      <Note
        key={uuidv4()}
        id={index}
        title={note.title}
        content={note.content}
        removeNote={deleteNote}
      />
    );
  });

  return (
    <Fragment>
      <main className="container">
        <Header />
        <CreateArea onAdd={addNote} />
        {renderNotes}
      </main>
      <Footer />
    </Fragment>
  );
};
export default App;
