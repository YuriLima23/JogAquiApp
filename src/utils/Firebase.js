import messaging, { firebase } from '@react-native-firebase/messaging';
import Firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import configFirebase from "../../google-services.json"
import { setItem } from '../cache/storage';
import { storageLabel } from '../../config/configs';
import PushNotification from 'react-native-push-notification';
import { routes } from '../routes/routes';
import { CommonActions } from '@react-navigation/native';
import { routesSignIn } from '../routes/stackHome';

let firebaseApp = null

export const authFirebase = async () => {
    // try {
    //     if (Firebase.apps.length == 0) {
    //         firebaseApp = await Firebase.initializeApp(configFirebase)
    //     } else {
    //         firebaseApp = Firebase.app()
    //     }
    //    // const response = await (await auth().signInAnonymously())

    //    // const fcm = await messaging().getToken()

    //     setItem(storageLabel.token_user_firebase, response.user.uid)
    //     setItem(storageLabel.fcm, fcm)

    //     return response
    // } catch (error) {
    //     console.log('error fiurebase :', error)
    //     return null
    // }
}

export const listeningEventMessage = async () => {
    try {
        messaging().onMessage((item) => {
            // PushNotification.removeAllDeliveredNotifications()
            console.log('item', item)
            PushNotification.localNotification({
                channelId: "jogaaqui",
                message: item.notification.body,
                title: item.notification.title,
            });
        })
    } catch (error) {
        console.log('error firebase messagin', error)
    }

}

export const requestCodePhone = async (phone) => {

    if (phone == "" || !phone) throw "Telefone invalido."
    phone = phone.replace(/\D/g, "")

    const response = await auth().signInWithPhoneNumber("+" + phone)
    console.log("RESPOSTA : ", response)
    if (!response) {
        return false
    }
    return response

}

export const listenerAuth = (listnerAuthFn) => {
    try {
        return auth().onAuthStateChanged(listnerAuthFn);
    } catch (error) {
        console.log("ERRO LSITENET FIREBASE")
        return false
    }
}

export const signOutUser = async () => {
    try {
        const user = await auth().currentUser
        if (user) {
            const response = await auth().signOut()
            console.log("USUARIO DESLOGADO")
        }
    } catch (error) {
        console.log("Erro ao deslogar o usuario do firebase", error)
    }
}

export const exceptions = (exception) => {

    let error = exception.code || ""
    if (exception.response) {
        error = exception.response.data
    }
    switch (error) {
        case "auth/too-many-requests":
            return "Você solicitou muitas vezes o codigo, aguarde 24 horas"
        case "auth/send-code-register":
            return "Erro ao solicitar o codigo, tente novamente!"
        case "auth/user-already-exist":
            return "Usuario já cadastrado com esse numero de telefone"
        case "auth/error-register-user":
            return "Erro ao registrar o usuario"
        case "auth/session-expired":
            return "Sessão expirada, faça login novamente"
        case "auth/invalid-login":
            return "Falha ao autenticar"
        case "auth/invalid-login-server":
            return "Erro no servidor, tente novamente mais tarde !"
        case "auth/token_invalid":
            return "Token invalido!"
        default:
            return "Algo de errado aconteceu, tente novamente mais tarde"
    }

}



// export default FirebaseApp;