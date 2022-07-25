import React from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

export const EmailInputExample = () => {
  
  const [value, setValue] = React.useState('value')
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current?.focus(), 0)
    alert('Icon Click Callback')
  }
  return (
    <Input
      type={'text'}
      placeholder={'placeholder'}
      onChange={e => setValue(e.target.value)}
      icon={'CurrencyIcon'}
      value={value}
      name={'name'}
      error={false}
      ref={inputRef}
      onIconClick={onIconClick}
      errorText={'Ошибка'}
      size={'default'}
    />
  )
}