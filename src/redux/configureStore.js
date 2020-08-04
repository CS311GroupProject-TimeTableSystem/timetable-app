import {createStore, combineReducers, applyMiddleware} from 'redux';
import {calendarDetails} from './Calendar';
import {noticeDetails} from './Notice';
import {staffDetails} from './Staff';
import {carouselDetails} from './Carousel';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            calendarDetails,
            noticeDetails,
            staffDetails,
            carouselDetails
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}