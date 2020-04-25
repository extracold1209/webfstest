import { AnyAction } from 'redux';
import produce from 'immer';
import {makeAction, makePayloadAction} from "../utils/makeAction";

// interface
export interface IHelloState {
    hello: string;
}

// types
export const SAY_HELLO = 'hello/SAY_HELLO';

// actions
export const sayHello = makeAction(SAY_HELLO);

// reducer
const initialState: IHelloState = {
    hello: 'world'
};

export default (state = initialState, { type, payload }: AnyAction) => {
    console.log(state);
    switch (type) {
        case SAY_HELLO:
            return produce(state, (nextState) => {
                nextState.hello = state.hello + '!';
            });
        default:
            return state;
    }
};
