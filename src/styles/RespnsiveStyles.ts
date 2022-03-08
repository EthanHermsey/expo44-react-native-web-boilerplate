import { StyleSheet } from 'react-native';
import { DEVICE_SIZES, maxSize } from 'rn-responsive-styles';

const ResponsiveStyles: Record<DEVICE_SIZES | any, StyleSheet.NamedStyles<any>> = {
    [maxSize(DEVICE_SIZES.MEDIUM_DEVICE)]: {
        center: {
            backgroundColor: 'darkorange'
        }
    },
    [maxSize(DEVICE_SIZES.SMALL_DEVICE)]: {
        center: {
            backgroundColor: 'darkblue'
        }
    }
}

export default ResponsiveStyles;