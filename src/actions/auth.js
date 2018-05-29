import {firebase, GoogleAuthProvider} from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(GoogleAuthProvider);
    }
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}