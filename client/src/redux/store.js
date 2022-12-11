import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./rootReducer";
import Saga from "./saga";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const sagaMiddleware = createSagaMiddleware();

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(Saga);

export const persistor = persistStore(Store);
