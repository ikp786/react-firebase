// import firebase from 'firebase'
import firebase from 'firebase/app';

const config ={
    apiKey: "AIzaSyCAycI6omnvazYZLFp_koiX89GxBOV3xAw",
    authDomain: "firbase-cloud-messaging-faf86.firebaseapp.com",
    projectId: "firbase-cloud-messaging-faf86",
    storageBucket: "firbase-cloud-messaging-faf86.appspot.com",
    messagingSenderId: "600346661489",
    appId: "1:600346661489:web:5c89e70dc5a0d5056a01d0"
}
firebase.initializeApp(config)

export default firebase;