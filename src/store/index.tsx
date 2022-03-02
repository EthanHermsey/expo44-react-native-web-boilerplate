import { Provider } from 'react-redux';
import configureStore from './ConfigureStore';

const store = configureStore();

const storeProvider: React.FC = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default storeProvider;
