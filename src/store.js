import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import { reducer as reduxFormReducer } from "redux-form/immutable";
import { reducer } from "./reducers";
import logger from "redux-logger";

const reducers = combineReducers({
    form: reduxFormReducer.plugin({}),
    dynamicFormsReducer: reducer
});

const composedEnhancers = compose(applyMiddleware(logger));
const store = createStore(reducers, composedEnhancers);

export default store;