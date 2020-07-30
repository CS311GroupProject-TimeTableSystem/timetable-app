import * as ActionTypes from './ActionTypes';

export const noticeDetails = (state = {
    isLoading: true,
    errMess: null,
    notice: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_NOTICE:
            return {...state, isLoading: false, errMess: null, notice: action.payload.filter(item => item.featured == true)[0]}

        case ActionTypes.NOTICE_LOADING:
            return {...state, isLoading: true, errMess: null, notice: []}

        case ActionTypes.NOTICE_FAILED:
            return {...state, isLoading: false, errMess: action.payload, notice: []}

        default:
            return state;
    }
}