import React from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import "./input.css"

export const InputExample = () => {
  
  const [pass, setPass] = React.useState('Bob')
  const [email, setEmail] = React.useState("bob@example.com")
  const [name, setName] = React.useState('bobPass')

  const [error, setError] = React.useState(false)

  const onIconClick = () => {
    setTimeout(() => {
      alert('Вы ввели некорректные данные')
      setError(true)
    }, 2000)
  }
  return (
    <div className='container'>
      <Input
        type={'text'}
        disabled
        placeholder={'Введите имя'}
        onChange={e => setName(e.target.value)}
        icon={"CheckMarkIcon"}
        value={name}
        name={'name'}
        error={error}
        onIconClick={onIconClick}
        errorText={'Ошибка, попробуйте позднее'}
        size={'default'}
      />
      <Input
        type={'email'}
        placeholder={'Введите email'}
        onChange={e => setEmail(e.target.value)}
        icon={"CheckMarkIcon"}
        value={email}
        name={'email'}
        error={error}
        onIconClick={onIconClick}
        errorText={'Ошибка, попробуйте позднее'}
        size={'default'}
      />
      <Input
        type={'password'}
        placeholder={'Введите пароль'}
        onChange={e => setPass(e.target.value)}
        icon={"CheckMarkIcon"}
        value={pass}
        name={'password'}
        error={error}
        onIconClick={onIconClick}
        errorText={'Ошибка, попробуйте позднее'}
        size={'default'}
      />
    </div>
  )
}