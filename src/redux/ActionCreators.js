import * as ActionTypes from './ActionTypes';
import { CALENDAR } from '../shared/calendar';
import { NOTICE } from '../shared/notice';
import { STAFF } from '../shared/staff';
import { CAROUSELDETAILS } from '../shared/carouselDetails';
import { auth, firestore, fireauth, firebasestore } from '../firebase/firebase';

export const fetchCarousel = () => (dispatch) => {
    dispatch(carouselLoading(true));

    firestore.collection('carouselDetails').get()
    .then((snapshot) => {
        let carouselDetails = []
        snapshot.forEach((doc) => {
            carouselDetails.push(doc.data());
        });
        return carouselDetails;
    })
    .then(carouselDetails => dispatch(addCarousel(carouselDetails)))
    .catch(error => dispatch(carouselFailed(error)));
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

    firestore.collection('calendar').get()
    .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
            data.push(doc.data());
        });
        return data;
    })
    .then(data => dispatch(addCalendar(data)))
    .catch(error => dispatch(calendarFailed(error)));
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

    firestore.collection('notice').get()
    .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
            data.push(doc.data());
        });
        return data;
    })
    .then(data => dispatch(addNotice(data)))
    .catch(error => dispatch(noticeFailed(error)));
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

    firestore.collection('staff').get()
    .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
            data.push(doc.data());
        });
        return data;
    })
    .then(data => dispatch(addStaff(data)))
    .catch(error => dispatch(staffFailed(error)));
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