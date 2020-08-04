import * as ActionTypes from './ActionTypes';

export const carouselDetails = (state = {
    isLoading: true,
    errMess: null,
    carousel: []
}, action) => {
    switch(action.type) {
        case ActionTypes.CAROUSEL_LOADING:
            return {...state, isLoading: true, errMess: null, carousel: []};

        case ActionTypes.CAROUSEL_FAILED:
            return {...state, isLoading: false, errMess: action.payload, carousel: []};

        case ActionTypes.ADD_CAROUSEL:
            return {...state, isLoading: false, errMess: null, carousel: action.payload.filter(item => item.featured == true)};

        default:
            return state;
    }
}