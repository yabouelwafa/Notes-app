/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

//router
import router from './router'

//firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhqFw3qqPD_5RTbofjOdK7U3HuPr-bNm4",
    authDomain: "kma-app-df18c.firebaseapp.com",
    projectId: "kma-app-df18c",
    storageBucket: "kma-app-df18c.appspot.com",
    messagingSenderId: "333691383878",
    appId: "1:333691383878:web:6ff99e26a4e361db8eda47",
    measurementId: "G-4M38VYM0N0"
  };

firebase.initializeApp(firebaseConfig);
const app = createApp(App)
registerPlugins(app)
app.use(router);
app.mount('#app')
