import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'materialize-css/dist/js/materialize.min'

  var firebaseConfig = {
    apiKey: "AIzaSyBudS-RT0F5-2Io11Jx3Sr1xziZkdnIsq0",
    authDomain: "control-4926b.firebaseapp.com",
    databaseURL: "https://control-4926b-default-rtdb.firebaseio.com",
    projectId: "control-4926b",
    storageBucket: "control-4926b.appspot.com",
    messagingSenderId: "1071687395913",
    appId: "1:1071687395913:web:c8d204d2735ad90df6ad98",
    measurementId: "G-75S7LMEEQD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  let app
  firebase.auth().onAuthStateChanged(() => {
    if(!app){
   app =  createApp(App).use(store).use(router).mount('#app')
    }
  })

