import { createStore } from 'redux';



const configureStore = preloadedState => (
  createStore(
   
    preloadedState,
  )
);

const store = configureStore({});

export default store;
