import React, { FC, useState } from 'react';
import { CurrencyIcon as YA_CurrencyIcon,
  BurgerIcon as YA_BurgerIcon,
  LockIcon as YA_LockIcon,
  DragIcon as YA_DragIcon,
  CloseIcon as YA_CloseIcon,
  CheckMarkIcon as YA_CheckMarkIcon,
  ListIcon as YA_ListIcon,
  ProfileIcon as YA_ProfileIcon,
  EditIcon as YA_EditIcon,
  InfoIcon as YA_InfoIcon,
  ShowIcon as YA_ShowIcon,
  HideIcon as YA_HideIcon,
  LogoutIcon as YA_LogoutIcon,
  DeleteIcon as YA_DeleteIcon,
  ArrowUpIcon as YA_ArrowUpIcon,
  ArrowDownIcon as YA_ArrowDownIcon,
  MenuIcon as YA_MenuIcon,} from '@ya.praktikum/react-developer-burger-ui-components';


import './Icons.css';

export interface IIconsListProps {
  /**
   * Определяет цвет иконки
   */
  type: "primary" | "secondary" | "error" | "success";

  /**
   * Действие на нажатие на иконку
   */
  onClick?: () => void;

  /**
   * Иконки-сабкомпоненты
   */
   children?: JSX.Element[];
}

export interface IIconProps {
  /**
   * Определяет цвет иконки
   */
  type: "primary" | "secondary" | "error" | "success";

  /**
   * Действие на нажатие на иконку
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const IconsList: FC<IIconsListProps> = ({type, children}) => {
  const [copied, setCopied] = useState(false)

  const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
    const text = `<${e.currentTarget.innerText} type="${type}"/>`
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
      setCopied(true)
      setTimeout(()=>{setCopied(false)}, 1000)
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  return (
  <div className="container">
    <div>
      {children?.map((value, index)=> {
        return(
          <div className="icon" onClick={handleClick}>
            {children[index]}
          </div>)
        })
      }
    </div>
    <div className={copied ? 'copied' : 'copied visible'}>Скопировано в буфер обмена</div>
  </div>
  )
};



export const CurrencyIcon: FC<IIconProps> = (props) => ( <YA_CurrencyIcon {...props}/> );
export const BurgerIcon: FC<IIconProps> = (props) => ( <YA_BurgerIcon {...props}/> );
export const LockIcon: FC<IIconProps> = (props) => ( <YA_LockIcon {...props}/> );
export const DragIcon: FC<IIconProps> = (props) => ( <YA_DragIcon {...props}/> );
export const CloseIcon: FC<IIconProps> = (props) => ( <YA_CloseIcon {...props}/> );
export const CheckMarkIcon: FC<IIconProps> = (props) => ( <YA_CheckMarkIcon {...props}/> );
export const ListIcon: FC<IIconProps> = (props) => ( <YA_ListIcon {...props}/> );
export const ProfileIcon: FC<IIconProps> = (props) => ( <YA_ProfileIcon {...props}/> );
export const EditIcon: FC<IIconProps> = (props) => ( <YA_EditIcon {...props}/> );
export const InfoIcon: FC<IIconProps> = (props) => ( <YA_InfoIcon {...props}/> );
export const ShowIcon: FC<IIconProps> = (props) => ( <YA_ShowIcon {...props}/> );
export const HideIcon: FC<IIconProps> = (props) => ( <YA_HideIcon {...props}/> );
export const LogoutIcon: FC<IIconProps> = (props) => ( <YA_LogoutIcon {...props}/> );
export const DeleteIcon: FC<IIconProps> = (props) => ( <YA_DeleteIcon {...props}/> );
export const ArrowUpIcon: FC<IIconProps> = (props) => ( <YA_ArrowUpIcon {...props}/> );
export const ArrowDownIcon: FC<IIconProps> = (props) => ( <YA_ArrowDownIcon {...props}/> );
export const MenuIcon: FC<IIconProps> = (props) => ( <YA_MenuIcon {...props}/> );


