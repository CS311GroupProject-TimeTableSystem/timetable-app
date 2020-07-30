import * as ActionTypes from './ActionTypes';

export const staffDetails = (state = {
    isLoading: true,
    errMess: null,
    staff: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_STAFF:
            return {...state, isLoading: false, errMess: null, staff: action.payload.filter(item => item.featured == true)[0]}

        case ActionTypes.STAFF_LOADING:
            return {...state, isLoading: true, errMess: null, staff: []}

        case ActionTypes.STAFF_FAILED:
            return {...state, isLoading: false, errMess: action.payload, staff: []}

        default:
            return state;
    }
}