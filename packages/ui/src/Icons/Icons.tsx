import React from 'react';
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

interface IconsProps {
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
export const Icons = (props: IconsProps) => {
  return (
    <div className='container'>
      <YA_CurrencyIcon {...props}/>
      <YA_BurgerIcon {...props}/>
      <YA_LockIcon {...props} />
      <YA_DragIcon {...props}/>
      <YA_CloseIcon {...props} />
      <YA_CheckMarkIcon {...props} />
      <YA_ListIcon {...props} />
      <YA_ProfileIcon {...props} />
      <YA_EditIcon {...props} />
      <YA_InfoIcon {...props} />
      <YA_ShowIcon {...props} />
      <YA_HideIcon {...props} />
      <YA_LogoutIcon {...props} />
      <YA_DeleteIcon {...props} />
      <YA_ArrowUpIcon  {...props} />
      <YA_ArrowDownIcon  {...props} />
      <YA_MenuIcon  {...props} />
    </div>
  );
};
