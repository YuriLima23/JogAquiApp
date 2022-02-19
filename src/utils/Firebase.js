import messaging, { firebase } from '@react-native-firebase/messaging';
import Firebase from '@react-native-firebase/app';
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
        const response = await firebaseApp.auth().signInAnonymously()
        setItem(storageLabel.token_user_firebase, response.user.uid)
        return response
    } catch (error) {
        console.log('error fiurebase :', error)
    }
}

export const listeningEventMessage = async () => {
    try {
        messaging().onMessage((item) => {
            PushNotification.removeAllDeliveredNotifications()
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

// export default FirebaseApp;