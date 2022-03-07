import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({});
const ConfigureStore = () => createStore(rootReducer);

export default ConfigureStore;