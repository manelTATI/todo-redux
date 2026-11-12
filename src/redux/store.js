// Note: Redux marks createStore as "deprecated" to push people toward
// Redux Toolkit. It still works perfectly; we keep it on purpose because
// this checkpoint is about the classic Redux approach.
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
