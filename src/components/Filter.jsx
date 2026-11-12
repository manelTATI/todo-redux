import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";

// The three filter options shown as buttons
const FILTERS = [
  { value: "all", label: "All" },
  { value: "done", label: "Done" },
  { value: "notDone", label: "Not done" },
];

function Filter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          type="button"
          className={filter === f.value ? "active" : ""}
          onClick={() => dispatch(setFilter(f.value))}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
