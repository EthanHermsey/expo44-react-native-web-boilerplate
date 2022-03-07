import { Provider } from 'react-redux';
import { ConfigureStore } from 'store';

const store = ConfigureStore();

const StoreProvider: React.FC = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default StoreProvider;
