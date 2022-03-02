import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import StoreProvider from 'store';
import Navigation from 'navigation';
import { NativeBaseProvider } from 'native-base'

const Root = () => {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <StoreProvider>
                <NativeBaseProvider>
                    <Navigation />
                </NativeBaseProvider>
            </StoreProvider>
        </SafeAreaProvider>
    );
}

export default Root;