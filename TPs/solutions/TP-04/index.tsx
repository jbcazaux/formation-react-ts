import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, TypedUseSelectorHook, useSelector} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import { reducer } from './reducers/index'
import { composeWithDevTools } from "redux-devtools-extension"

import ShoppingList from './ShoppingList'

export type AppState = ReturnType<typeof reducer>;
export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...[]))
);

ReactDOM.render(
  <Provider store={store}>
    <ShoppingList title="liste de courses" />
  </Provider>,
  document.getElementById('root')
)
