import { createStoreHook } from 'redux';
// import { rootReducer } from './reducers';
// export const store = createStoreHook(rootReducer)

const reducer = (state, action) => {
    console.log("reducer called")
    return state;
};

export const store = createStoreHook(reducer, 0);

export default store;