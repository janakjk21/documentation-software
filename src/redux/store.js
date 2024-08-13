import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer'; // Adjust the import according to your project structure

// Persist configuration
const persistConfig = {
	key: 'root',
	storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // Disable serializable check for redux-persist
		}),
});

// Create a persistor
const persistor = persistStore(store);

export default store;
export { persistor };
