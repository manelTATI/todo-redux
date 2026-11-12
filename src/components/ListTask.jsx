import { useSelector } from "react-redux";
import Filter from "./Filter";
import Task from "./Task";

function ListTask() {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  // Keep only the tasks that match the current filter
  const visibleTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true; // "all"
  });

  return (
    <section>
      <Filter />
      {visibleTasks.length === 0 ? (
        <p className="empty">No tasks</p>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ListTask;
