import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ruleReducer(state = initialState.rules, action) {
    switch (action.type) {
        case types.UPDATE_RULES_SUCCESS: {
            console.log('reducer ', action.data);
            return [...state, action.data];
        }
        default:
            return state;
    }
}