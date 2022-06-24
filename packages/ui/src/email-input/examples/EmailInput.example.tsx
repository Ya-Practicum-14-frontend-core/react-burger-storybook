import React, { ChangeEvent } from 'react';

import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';



export const EmailInputExample = () => {
  const [value, setValue] = React.useState('bob@example.com')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return <EmailInput onChange={onChange} value={value} name={'email'} />
}