const firebase= require('firebase')
const firebaseConfig = {
    apiKey: "AIzaSyCgowgTfCoNvT1IJIHf3zsHYyXQslDH5D4",
    authDomain: "nodeapp-3001c.firebaseapp.com",
    projectId: "nodeapp-3001c",
    storageBucket: "nodeapp-3001c.appspot.com",
    messagingSenderId: "798215380614",
    appId: "1:798215380614:web:6b7e98c7bdc24ee9fffb07"
};
firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app