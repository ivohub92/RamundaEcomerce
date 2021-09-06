import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

    const firebaseConfig = {
        apiKey: "AIzaSyDg-yoPXClFM9PXAmJ0zfoOLU56_w3HJzs",
        authDomain: "ramunda-ecomerce.firebaseapp.com",
        projectId: "ramunda-ecomerce",
        storageBucket: "ramunda-ecomerce.appspot.com",
        messagingSenderId: "858090787729",
        appId: "1:858090787729:web:48daf1a21c4140e691c030",
        measurementId: "G-VDHRFZWZJP"
      };

      firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore();