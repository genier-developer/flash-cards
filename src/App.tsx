import { useState } from 'react'

import { Input } from '@/components/ui/input'
// eslint-disable-next-line import/namespace
import { RadioGroupUI } from '@/components/ui/radio-group/radio-group'

export function App() {
  const [searchInputValue, setSearchInputValue] = useState('input')

  const onSearchInputChange = (e: any) => {
    setSearchInputValue(e.currentTarget.value)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Input label={'input'} placeholder={'search input'} type={'search'} />
      <Input label={'password'} placeholder={'input'} type={'password'} />
      <Input
        label={'input search'}
        onChange={onSearchInputChange}
        onClearClick={() => {
          setSearchInputValue('')
        }}
        placeholder={'input'}
        type={'search'}
        value={searchInputValue}
      />
      <RadioGroupUI />
    </div>
  )
}
