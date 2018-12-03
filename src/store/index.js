import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { loadState, saveState } from './browserCache';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const persistedState = loadState() || {};
const store = createStore(rootReducer, persistedState, applyMiddleware(...middleware));

store.subscribe(()=>{
    saveState({ name: store.getState().name });
});

sagaMiddleware.run(rootSaga);
export default store;