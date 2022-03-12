import messaging, { firebase } from '@react-native-firebase/messaging';
import Firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import configFirebase from "../../google-services.json"
import { setItem } from '../cache/storage';
import { storageLabel } from '../../config/configs';
import PushNotification from 'react-native-push-notification';

let firebaseApp = null

export const authFirebase = async () => {
    try {
        if (Firebase.apps.length == 0) {
            firebaseApp = await Firebase.initializeApp(configFirebase)
        } else {
            firebaseApp = Firebase.app()
        }
        const response = await (await auth().signInAnonymously())

        const fcm = await messaging().getToken()

        setItem(storageLabel.token_user_firebase, response.user.uid)
        setItem(storageLabel.fcm, fcm)

        return response
    } catch (error) {
        console.log('error fiurebase :', error)
        return null
    }
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
    try {
        if (phone == "" || !phone) throw "Telefone invalido."
        const response = await auth().signInWithPhoneNumber(phone)
        console.log('response code phone', response )
        return true
    } catch (error) {
        console.log('error request code phone:', error)
        return false
    }
}


// export default FirebaseApp;