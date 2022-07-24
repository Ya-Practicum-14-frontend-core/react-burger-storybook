import { PropsWithChildren, FC} from 'react'
import { Tab as YA_Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export interface ITabProps {
    /**
    Контент таба
   */
  content: string;
      /**
    Определяет активна ли кнопка
   */
  active: boolean;
    /**
    Value
   */
  value: string;
    /**
    Действие при клике
   */
  onClick: (value: string) => void;
}

export const Tab: FC<PropsWithChildren<ITabProps>> = ({ content, ...props}): JSX.Element => {
  return <YA_Tab {...props}> {content} </YA_Tab>
}