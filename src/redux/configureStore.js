import {createStore, combineReducers} from 'redux';
import {carouselDetails} from './carouselDetails';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            carouselDetails
        })
    );

    return store;
}