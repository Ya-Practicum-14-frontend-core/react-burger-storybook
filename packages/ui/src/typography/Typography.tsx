import { FC } from 'react'

export interface ITypographyProps {
  /**
  Цвет текста
  */
  color: 'text_color_inactive' | 'text_color_primary' | 'text_color_accent' |  'text_color_error' |  'text_color_success';
  /**
  Тип текста
  */
  type: 'text_type_main-default' | 'text_type_main-large' | 'text_type_main-medium' |
    'text_type_main-small' |  'text_type_digits-default' | 'text_type_digits-medium' |  'text_type_digits-large';
  /**
  Текст
  */
  value: string;
}

export const Typography: FC<ITypographyProps> = ({type, color, value}) => {
  return (
    <p className={`${type ? type : 'text_type_main-default'} ${color ? color : 'text_color_primary'}`}>
      {`<p className='${type ? type : 'text_type_main-default'} ${color ? color : 'text_color_primary'}'> ${value ? value : "Пример текста"} </p>`}
    </p>)
}