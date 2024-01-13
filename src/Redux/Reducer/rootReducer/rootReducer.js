import { combineReducers } from "redux";
import IncDec from "../IncDec";
import AddReducer from "../AddReducer";


const rootReducer = combineReducers({
    IncDec: IncDec,
    AddReducer: AddReducer
})


export default rootReducer;