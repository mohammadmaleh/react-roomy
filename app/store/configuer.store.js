import { createStore,combineReducers, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import { localStorage } from 'redux-persist/storages';
import initSubscriber from 'redux-subscriber';
import combinedReducers from 'reducers'
export default function configureStore() {
    const middlewares = [];

    return new Promise((resolve, reject) => {
        try {
            const store = createStore(
                combinedReducers,
                undefined,
                compose(
                    autoRehydrate(),
                    applyMiddleware(...middlewares),

                ),
            );

            persistStore(
                store,
                { storage: localStorage },
                () => resolve(store)
            );
            initSubscriber(store);
        } catch (e) {
            reject(e);
        }
    });
}
