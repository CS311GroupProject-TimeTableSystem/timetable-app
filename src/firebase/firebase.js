import { config } from './config';
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(config);

export const auth = firebase.auth();

export const fireauth = firebase.auth;

export const firestore = firebase.firestore();

export const firebasestore = firebase.firestore;