import { createStore, applyMiddleware, compose } from 'redux';
import {combineReducers} from 'redux-immutable'
import { reducer as reduxFormReducer } from 'redux-form/immutable';
import {reducer, CREATE_FORM, UPDATE_FORM} from './actions'
import logger from 'redux-logger';

const reducers = combineReducers({
    form: reduxFormReducer.plugin({
        dynamicForm: (state, action) => {
            switch (action.type) {
                case CREATE_FORM:
                case UPDATE_FORM:
                    return undefined;
                default:
                    return state;

            }
        },
        dynamicFormView: (state, action) => {
            switch (action.type) {
                case CREATE_FORM:
                case UPDATE_FORM:
                    return undefined;
                default:
                    return state;

            }
        }
    }),
    appReducer: reducer

});

const enhancers = [];

const composedEnhancers = compose(applyMiddleware(logger), ...enhancers);
const store = createStore(reducers, composedEnhancers);

export default store;