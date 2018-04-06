import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleWare from 'redux-saga'
import thunk from 'redux-thunk'
import rootReducer from 'reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleWare()
const middlewares = [sagaMiddleware, thunk]

const persistConfig = {
  key: 'redux.store.kode.trainee',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares))

export default function configureStore(initialState) {
  const store = createStore(persistedReducer, initialState, enhancer)
  const persistor = persistStore(store)

  return { store, persistor }
}
