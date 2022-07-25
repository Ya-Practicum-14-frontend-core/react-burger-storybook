import { PropsWithChildren, FC, SyntheticEvent} from 'react'
import { Button as YA_Button } from "@ya.praktikum/react-developer-burger-ui-components";

export interface IButtonProps {
    /**
    Тип кнопки (необязательно)
   */
    type?: 'secondary' | 'primary' | undefined;
      /**
    Размер кнопки (необязательно)
   */
    size?: 'small' | 'medium' | 'large';
    /**
    Value - значение кнопки
   */
    value: string | number;
    /**
    Действие при клике (необязательно)
   */
    onClick?: (() => void) | ((e: SyntheticEvent) => void);
    /**
    Name кнопки
   */
    name?: string;
    /**
     Указывает активна ли кнопка (необязательно)
   */
    disabled?: boolean;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({ value, ...props}): JSX.Element => {
  return <YA_Button {...props}> {value} </YA_Button>
}