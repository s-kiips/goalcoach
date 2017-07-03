import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBW573yJ2QQq0XwLzTJFoZ3L9hKUog1GH4",
    authDomain: "goalcoach-833f8.firebaseapp.com",
    databaseURL: "https://goalcoach-833f8.firebaseio.com",
    projectId: "goalcoach-833f8",
    storageBucket: "goalcoach-833f8.appspot.com",
    messagingSenderId: "584448209477"
};

export const firebaseApp=firebase.initializeApp(config);