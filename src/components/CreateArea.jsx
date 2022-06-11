import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  }

  function handleClick(event) {
    let { title, content } = note;
    if (title !== "" && content !== "") {
      props.onAdd(note);
      setNote({ title: "", content: "" });
      setExpand(false);
    }
    event.preventDefault();
  }

  const InputArea = expand ? (
    <input
      name="title"
      placeholder="Title"
      onChange={handleChange}
      value={note.title}
    />
  ) : null;

  return (
    <div>
      <form className="create-note">
        {InputArea}
        <textarea
          name="content"
          onClick={() => setExpand(true)}
          placeholder="Take a Note...."
          onChange={handleChange}
          cols="0"
          rows={expand ? "5" : "1"}
          value={note.content}
        ></textarea>
        <Zoom in={expand}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
