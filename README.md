# Redux ToDo App

A simple ToDo app built with **React** and **classic Redux** for the GoMyCode *Redux Checkpoint*.

It uses the standard Redux pieces: `createStore`, a reducer, action types, action creators, `<Provider>`, `useSelector` and `useDispatch`. Redux Toolkit is not used.

## Features

- **Add** a task (empty input is ignored and the field clears after adding)
- **Toggle** a task done / not done (done tasks are crossed out)
- **Edit** a task's description, with Save and Cancel (Enter saves, Esc cancels)
- **Delete** a task
- **Filter** the list: All / Done / Not done
- A **"No tasks"** message when the filtered list is empty
- Works on mobile screens

## Getting started

Requirements: [Node.js](https://nodejs.org/) 20 or newer.

```bash
git clone https://github.com/manelTATI/todo-redux.git
cd todo-redux
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

Other scripts:

| Command | What it does |
|---|---|
| `npm run build` | Builds the production version into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Checks the code with Oxlint |

## Project structure

```
src/
├── main.jsx              # Wraps <App /> in <Provider store={store}>
├── App.jsx               # Page layout: AddTask + ListTask
├── index.css             # Styles
├── components/
│   ├── AddTask.jsx       # Input + Add button
│   ├── ListTask.jsx      # Reads tasks, applies the filter, renders Task items
│   ├── Filter.jsx        # All / Done / Not done buttons
│   └── Task.jsx          # One task: toggle, edit (Save/Cancel), delete
└── redux/
    ├── actionTypes.js    # ADD_TASK, TOGGLE_TASK, EDIT_TASK, DELETE_TASK, SET_FILTER
    ├── actions.js        # Action creators
    ├── reducer.js        # Pure reducer
    └── store.js          # createStore(reducer)
```

## How the state works

The whole app state lives in one Redux store:

```js
{
  tasks: [
    { id: "a1b2…", description: "Buy milk", isDone: false }
  ],
  filter: "all" // "all" | "done" | "notDone"
}
```

- Each task gets a unique `id` from `crypto.randomUUID()`, and `isDone` starts as `false`.
- The reducer never changes the old state. It always returns a new object (using the spread operator, `map` and `filter`).
- Only the edit mode of a task (is it being edited, and the text being typed) is kept in local `useState`. Everything else is in Redux.

> **Note:** Redux shows `createStore` as *deprecated* to encourage Redux Toolkit. It still works fine, and this project uses it on purpose because the checkpoint is about the classic Redux approach.

## Tech stack

- React 19
- Redux 5 + React Redux 9
- Vite 8
