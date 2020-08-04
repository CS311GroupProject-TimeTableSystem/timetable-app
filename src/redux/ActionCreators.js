import * as ActionTypes from './ActionTypes';
import { CALENDAR } from '../shared/calendar';
import { NOTICE } from '../shared/notice';
import { STAFF } from '../shared/staff';
import { CAROUSELDETAILS } from '../shared/carouselDetails';
import { auth, firestore, fireauth, firebasestore } from '../firebase/firebase';

export const fetchCarousel = () => (dispatch) => {
    dispatch(carouselLoading(true));
    console.log("FROM FIRESTORE");
    firestore.collection('carouselDetails').get()
    .then((snapshot) => {
        let carouselDetails = []
        snapshot.forEach((doc) => {
            carouselDetails.push(doc.data());
        });
        return carouselDetails;
    })
    .then(carouselDetails => dispatch(addCarousel(carouselDetails)));
    // setTimeout(() => {
    //     dispatch(addCarousel(CAROUSELDETAILS));
    // }, 2000);
}

export const carouselLoading = () => ({
    type: ActionTypes.CAROUSEL_LOADING
});

export const carouselFailed = (errmess) => ({
    type: ActionTypes.CAROUSEL_FAILED,
    payload: errmess
});

export const addCarousel = (payload) => ({
    type: ActionTypes.ADD_CAROUSEL,
    payload: payload
});

export const fetchCalendar = () => (dispatch) => {
    dispatch(calendarLoading(true));

    setTimeout(() => {
        dispatch(addCalendar(CALENDAR));
    }, 2000);
}

export const calendarLoading = () => ({
    type: ActionTypes.CALENDAR_LOADING
});

export const calendarFailed = (errmess) => ({
    type: ActionTypes.CALENDAR_FAILED,
    payload: errmess
});

export const addCalendar = (payload) => ({
    type: ActionTypes.ADD_CALENDAR,
    payload: payload
});

export const fetchNotice = () => (dispatch) => {
    dispatch(noticeLoading(true));

    setTimeout(() => {
        dispatch(addNotice(NOTICE));
    }, 2000);
}

export const noticeLoading = () => ({
    type: ActionTypes.NOTICE_LOADING
});

export const noticeFailed = (errmess) => ({
    type: ActionTypes.NOTICE_FAILED,
    payload: errmess
});

export const addNotice = (payload) => ({
    type: ActionTypes.ADD_NOTICE,
    payload: payload
});

export const fetchStaff = () => (dispatch) => {
    dispatch(staffLoading(true));

    setTimeout(() => {
        dispatch(addStaff(STAFF));
    }, 2000);
}

export const staffLoading = () => ({
    type: ActionTypes.STAFF_LOADING
});

export const staffFailed = (errmess) => ({
    type: ActionTypes.STAFF_FAILED,
    payload: errmess
});

export const addStaff = (payload) => ({
    type: ActionTypes.ADD_STAFF,
    payload: payload
});