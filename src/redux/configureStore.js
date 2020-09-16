import rootReducer from "./reducers/index";
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}
