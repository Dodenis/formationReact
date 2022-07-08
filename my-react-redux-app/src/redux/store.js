import { legacy_createStore as createStore} from 'redux';
import rootReducer from './rootReducer';

//créer le store avec la fonction createStore
const store = createStore(rootReducer);

export default store;