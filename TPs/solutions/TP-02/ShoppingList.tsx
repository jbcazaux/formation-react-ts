import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShoppingItem from './ShoppingItem'
import PropTypes from 'prop-types'
import { Item } from './model/item'

type Props = { title: string }

const ShoppingList = ({ title }: Props) => {
  const [items, setItems] = useState<ReadonlyArray<Item>>([])

  useEffect(() => {
    axios
      .get('./items.json')
      .then(resp => resp.data)
      .then(items => items.map((item: any) => new Item(item.id, item.label, item.price)))
      .then(items => setItems(items))
      .catch(() => setItems([]))
  }, [])

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

ShoppingList.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ShoppingList
