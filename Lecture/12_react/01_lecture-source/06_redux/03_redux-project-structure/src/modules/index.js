import { combineReducers } from "redux";
import pokemonReducer from "./pokemonModule";

const rootReducer = combineReducers({
    pokemonReducer
});

export default rootReducer;