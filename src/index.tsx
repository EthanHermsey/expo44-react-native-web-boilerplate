import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { StoreProvider } from 'providers';
import { RootNavigator } from 'navigation';
import { NativeBaseProvider } from 'native-base'

const Root = () => {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <StoreProvider>
                <NativeBaseProvider>
                    <RootNavigator />
                </NativeBaseProvider>
            </StoreProvider>
        </SafeAreaProvider>
    );
}

export default Root;