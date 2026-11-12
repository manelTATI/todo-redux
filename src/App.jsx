import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <main className="app">
      <h1>My ToDo List</h1>
      <AddTask />
      <ListTask />
    </main>
  );
}

export default App;
