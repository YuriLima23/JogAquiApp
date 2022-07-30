import messaging, { firebase } from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import PushNotification from 'react-native-push-notification';


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
    console.log('phone', phone)
    await logoutAuthFirebase()
    const response = await auth().signInWithPhoneNumber("+" + phone)
    console.log("RESPOSTA : ", response)
    if (!response) {
        return false
    }
    return response

}
export const logoutAuthFirebase = async () => {
    try {
        await auth().signOut()
    } catch (error) {
        console.log('Erro ao deslogar o usuario firebase', error)
    }
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

export const exceptions = (exception, context) => {

    let error = exception.code || exception || ""
    console.log("MOTIVO ERRO : ", error)

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
            context && context.logout()
            return "Sessão expirada, faça login novamente"
        case "auth/invalid-login":
            return "Falha ao autenticar"
        case "auth/invalid-login-user-not-exist":
            return "Falha ao autenticar, usuario não existe"
        case "auth/invalid-login-server":
            return "Erro no servidor, tente novamente mais tarde !"
        case "auth/token_invalid":
            return "Token invalido!"
        case "solicitation/error-create":
            return "Erro ao criar sua solicitação!"
        case "wallet/error-recover":
            return "Erro ao recuperar os dados da carteira !"
        case "auth/invalid-phone-number":
            return "Numero de telefone não identificado!"
        case "user/error-recover":
            return "Erro ao recuperar o usuario!"
        case "solicitation/types-recicles-invalid":
            return "Erro ao identificar os tipos de residuos selecionados!"
        case "support/invalid-data":
            return "Todos os campos são obrigatorios!"
        case "support/error-send_data":
            return "Erro ao enviar a solicitação de suporte, tente novamente mais tarde !"
        case "solicitation/error-remove-solicitation":
            return "Erro ao carregar os dados do marcador."
        default:
            return "Algo de errado aconteceu, tente novamente mais tarde"
    }

}



// export default FirebaseApp;