import {Item} from '../model/item'
import {Action, ActionCreator} from 'redux'

export const ADD_ITEM = 'ADD_ITEM'
export const SET_ITEMS = 'SET_ITEMS'

interface AddItemAction extends Action<typeof ADD_ITEM> {
  item: Item;
}

interface SetItemsAction extends Action<typeof SET_ITEMS>{
  items: ReadonlyArray<Item>;
}

export type ItemAction = AddItemAction | SetItemsAction

export const setItems : ActionCreator<SetItemsAction> = (items: ReadonlyArray<Item>) => ({
  type: SET_ITEMS,
  items,
})

export const addItem : ActionCreator<AddItemAction> = (item: Item) => ({
  type: ADD_ITEM,
  item,
})
