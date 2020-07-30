import * as ActionTypes from './ActionTypes';

export const calendarDetails = (state = {
    isLoading: true,
    errMess: null,
    calendar: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_CALENDAR:
            return {...state, isLoading: false, errMess: null, calendar: action.payload.filter(item => item.featured == true)[0]}

        case ActionTypes.CALENDAR_LOADING:
            return {...state, isLoading: true, errMess: null, calendar: []}

        case ActionTypes.CALENDAR_FAILED:
            return {...state, isLoading: false, errMess: action.payload, calendar: []}

        default:
            return state;
    }
}