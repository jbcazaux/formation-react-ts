import { ADD_ITEM, ItemAction, SET_ITEMS } from '../actions/items'
import { Item } from '../model/item'
import {Reducer} from 'redux'

const initialState: ReadonlyArray<Item> = []

const items : Reducer<ReadonlyArray<Item>, ItemAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.items
    case ADD_ITEM:
      return state.concat(action.item)
    default:
      return state
  }
}

export default items
