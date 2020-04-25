import {createStore, combineReducers} from 'redux';
import helloReducer, {IHelloState} from "./modules/helloReducer";

export type IReducers = {
    hello: IHelloState
}

const reducers = combineReducers<IReducers>({
    hello: helloReducer
})

const store = createStore(reducers)

export default store;
