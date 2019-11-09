import React, {useEffect, useState} from 'react'
import ShoppingItem from './ShoppingItem'
import PropTypes from 'prop-types'
import {addItem, setItems} from './actions/items'
import {useDispatch} from 'react-redux'
import {Item} from './model/item'
import {useTypedSelector} from './index'
import {Dispatch} from 'redux'

type Props = { title: string }

const ShoppingList = ({ title }: Props) => {
  const [newItemLabel, setNewItemLabel] = useState('')
  const [newItemPrice, setNewItemPrice] = useState(0)
  const dispatch: Dispatch = useDispatch()
  const items = useTypedSelector(state => state.items)

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault()
    const addItemAction = addItem(new Item(Date.now(), newItemLabel, newItemPrice))
    dispatch(addItemAction)
    setNewItemLabel('')
    setNewItemPrice(0)
  }

  useEffect(() => {
    const setItemsAction = setItems([
      new Item(1, 'pain', 0.95),
      new Item(2, 'gel douche', 2.85),
      new Item(3, 'cahier à spirales', 1.2),
    ])
    dispatch(setItemsAction)
  }, [])

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input type="text" placeholder="item" onChange={e => setNewItemLabel(e.target.value)} value={newItemLabel} />
        <input type="number" onChange={e => setNewItemPrice(parseFloat(e.target.value))} value={newItemPrice} />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default ShoppingList

ShoppingList.propTypes = {
  title: PropTypes.string.isRequired,
}
