import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../redux/actions";

function Task({ task }) {
  const dispatch = useDispatch();
  // Local state: are we editing, and what is the new text?
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.description);

  const startEdit = () => {
    setNewText(task.description);
    setIsEditing(true);
  };

  const save = () => {
    const description = newText.trim();
    if (!description) return; // do not save an empty description
    dispatch(editTask(task.id, description));
    setIsEditing(false);
  };

  const cancel = () => setIsEditing(false);

  // Edit mode: show an input with Save / Cancel
  if (isEditing) {
    return (
      <li className="task">
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") save();
            if (e.key === "Escape") cancel();
          }}
          aria-label="Edit task"
          autoFocus
        />
        <div className="actions">
          <button type="button" onClick={save}>
            Save
          </button>
          <button type="button" className="secondary" onClick={cancel}>
            Cancel
          </button>
        </div>
      </li>
    );
  }

  // Normal mode: checkbox, text, Edit / Delete
  return (
    <li className="task">
      <label className={task.isDone ? "done" : ""}>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        <span>{task.description}</span>
      </label>
      <div className="actions">
        <button type="button" onClick={startEdit}>
          Edit
        </button>
        <button
          type="button"
          className="danger"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
