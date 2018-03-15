import { auth } from './firebase';

// Sign Up
//función de registro. Toma los parámetros de correo electrónico y contraseña y usa un punto final del objeto firebase para crear un usuario.
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
//función de inicio de sesión también requiere de un correo electrónico y una contraseña. Utiliza de nuevo un punto final del objeto de Firebase para iniciar sesión en un usuario.
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
//No es necesario que le pase ningún argumento, porque el objeto de autenticación conoce el usuario autenticado.
export const doSignOut = () =>
  auth.signOut();


// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);
