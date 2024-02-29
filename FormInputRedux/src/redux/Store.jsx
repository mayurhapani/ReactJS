import { createStore } from "redux";
import Reducer from "./Reducer";

var Store = createStore(Reducer);
export default Store;
