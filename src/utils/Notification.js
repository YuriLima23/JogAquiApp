import PushNotification from "react-native-push-notification"

export const getCanalNotification = async () => {
    try {
        PushNotification.getChannels((item) => {
            if (item.length <= 0) {
                PushNotification.createChannel(
                    {
                        channelId: "jogaaqui",
                        channelName: "joga aqui",
                        playSound: true,
                        soundName: "default",
                        vibrate: true,
                    },
                    (criado) => console.log(`createChannel retornou ' ${criado} '`)
                )
            }
        });



    } catch (error) {
        console.log('error', error)
    }
}