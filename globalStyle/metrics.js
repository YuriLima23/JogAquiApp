
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
export const metrics = {
    screenWidth: width,
    screenHeight: height,
    borderWidh:1,
    borderRadius:15,
    marginSmall:2,
    marginMedium:5,
    marginLarge:10,
    paddingSmall:2,
    paddingMedium:5,
    paddingLarge:10,
    widthScreen:Dimensions.get("screen").width,
    heightScreen:Dimensions.get("screen").height
}

