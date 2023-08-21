// import rootReducer from "./modules";
// import { createStore, applyMiddleware } from "redux";
// import ReduxThunk from "redux-thunk";


// const store = createStore(
//     rootReducer,
//     applyMiddleware(ReduxThunk)
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./modules/pokemonModule";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

export default configureStore({
    reducer: {
        pokemonReducer
    }, 
    middleware: [thunk, logger]
});