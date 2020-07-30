import * as ActionTypes from './ActionTypes';
import { CALENDAR } from '../shared/calendar';
import { NOTICE } from '../shared/notice';
import { STAFF } from '../shared/staff';

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

export const addCalendar = () => ({
    type: ActionTypes.ADD_CALENDAR,
    payload: CALENDAR
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

export const addNotice = () => ({
    type: ActionTypes.ADD_NOTICE,
    payload: NOTICE
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

export const addStaff = () => ({
    type: ActionTypes.ADD_STAFF,
    payload: STAFF
});