import rootReducer from '../Reducer/rootReducer/rootReducer'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import { createStore } from "redux";
import { persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
}

const persistReducers = persistReducer(persistConfig, rootReducer);
const store = createStore(persistReducers);
export const persistors = persistStore(store);
export default store;