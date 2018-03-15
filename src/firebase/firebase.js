//importar el objeto firebase del paquete de nodos firebase
import * as firebase from 'firebase';

// configuración del panel que dan en Firebase
const config = {
	apiKey: "AIzaSyCSBjEECmXPEBxKKKkVqn52-12Y6v9W0Jg",
  authDomain: "nasa-share.firebaseapp.com",
  databaseURL: "https://nasa-share.firebaseio.com",
  projectId: "nasa-share",
  storageBucket: "nasa-share.appspot.com",
  messagingSenderId: "949600951605"
};

//inicialice el objeto de autenticación
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};