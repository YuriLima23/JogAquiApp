import { storageLabel } from "../../config/configs";
import { getItem } from "../cache/storage";
import auth from "@react-native-firebase/auth"
import api from "./service";
import endpoints from "./endpoints";



// export const getAuth = async () => {
//     try {
//         let user_fcm = await getItem(storageLabel.fcm, true)
//         let user_id_firebase = await getItem(storageLabel.token_user_firebase)
//         // const response = await auth().signInWithPhoneNumber('+55 53999342007');
//         const response = await api.post(endpoints.getAuthPath, {
//             fcm: user_fcm,
//             uid: user_id_firebase
//         })

//     } catch (error) {
//         console.log('Error resources user', error)
//     }
// }

