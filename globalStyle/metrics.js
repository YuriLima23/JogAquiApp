
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
export const metrics = {
    screenWidth: width,
    screenHeight: height
}