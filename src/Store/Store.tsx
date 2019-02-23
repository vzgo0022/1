import { createStore} from 'redux';
import rootReducer from '../Reducers';




const configureStore = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
  )
);

const store = configureStore({});

export default store;
