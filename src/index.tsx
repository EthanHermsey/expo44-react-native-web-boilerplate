import 'react-native-gesture-handler';
import { SafeAreaProvider, initialWindowMetrics, SafeAreaView } from 'react-native-safe-area-context';
import { StoreProvider } from 'providers';
import { RootNavigator } from 'navigation';

const Root = () => {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <StoreProvider>
                    <RootNavigator />
                </StoreProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default Root;