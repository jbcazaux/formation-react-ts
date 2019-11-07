import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'

type Props = {onChange: (value: string) => void}

const Filter = ({ onChange }: Props) => {
  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <form className="form-inline">
      <InputLabel htmlFor="filterName" className="control-label">
        Filtrer:
      </InputLabel>
      <Input
        id="filterName"
        type="text"
        placeholder="Tapez un nom..."
        onChange={onFilterChange}
        className="form-control"
        style={{ marginLeft: '5px' }}
      />
    </form>
  )
}

export default Filter
