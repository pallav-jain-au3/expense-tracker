import { createStore, combineReducers} from "redux";
import userReducer from "./reducers/userReducer";


const intialState = {};
const reducer = combineReducers({
  user: userReducer
 });

const store = createStore(
  reducer,
  intialState
);

export default store;