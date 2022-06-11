import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Note = (props) => {
  function handleClick() {
    props.removeNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteForeverIcon/>
      </button>
    </div>
  );
};
export default Note;
