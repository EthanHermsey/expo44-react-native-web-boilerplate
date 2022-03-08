import 'react-native-gesture-handler';
import { SafeAreaProvider, initialWindowMetrics, SafeAreaView } from 'react-native-safe-area-context';
import { StoreProvider } from 'providers';
import { RootNavigator } from 'navigation';
import { NativeBaseProvider } from 'native-base'

const Root = () => {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <StoreProvider>
                    <NativeBaseProvider>
                        <RootNavigator />
                    </NativeBaseProvider>
                </StoreProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default Root;