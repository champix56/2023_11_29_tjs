import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ressourceReducer, { fillImages } from './ressources'
import currentReducer from './current'
//export const store = createStore(ressourceReducer)
export const store = configureStore({
    reducer: combineReducers({ressources:ressourceReducer,current:currentReducer}),
    devTools: true
})
store.subscribe(()=>console.trace(store.getState()))
console.log('chargement du store')
console.log(store.getState())
// console.log(fillImages([{ id: 0 }, { id: 1 }]))

//store.dispatch({ type: 'ressources/fillImages', payload: [{ id: 0 }] })
/* store.dispatch(fillImages([{ id: 0 }]))

store.dispatch(fillImages([{ id: 0 }]))*/
