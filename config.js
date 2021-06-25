import * as firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAiEtPQgL-MKylcve6dsiEFgMDZc_gwrKI",
    authDomain: "the-fruits-n-vegetable-keeper.firebaseapp.com",
    projectId: "the-fruits-n-vegetable-keeper",
    storageBucket: "the-fruits-n-vegetable-keeper.appspot.com",
    messagingSenderId: "945436268262",
    appId: "1:945436268262:web:a3d70ccde2f9fddf574d27"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()