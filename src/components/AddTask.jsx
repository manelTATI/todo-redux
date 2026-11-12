import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = text.trim();
    if (!description) return; // ignore empty input
    dispatch(addTask(description));
    setText(""); // clear the field
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="New task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTask;
