import React, { FC } from 'react';
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

export interface IIconsProps {
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
export const Icons: FC<IIconsProps> = (props) => {
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

export const CurrencyIcon: FC<IIconsProps> = (props) => ( <YA_CurrencyIcon {...props}/> );
export const BurgerIcon: FC<IIconsProps> = (props) => ( <YA_BurgerIcon {...props}/> );
export const LockIcon: FC<IIconsProps> = (props) => ( <YA_LockIcon {...props}/> );
export const DragIcon: FC<IIconsProps> = (props) => ( <YA_DragIcon {...props}/> );
export const CloseIcon: FC<IIconsProps> = (props) => ( <YA_CloseIcon {...props}/> );
export const CheckMarkIcon: FC<IIconsProps> = (props) => ( <YA_CheckMarkIcon {...props}/> );
export const ListIcon: FC<IIconsProps> = (props) => ( <YA_ListIcon {...props}/> );
export const ProfileIcon: FC<IIconsProps> = (props) => ( <YA_ProfileIcon {...props}/> );
export const EditIcon: FC<IIconsProps> = (props) => ( <YA_EditIcon {...props}/> );
export const InfoIcon: FC<IIconsProps> = (props) => ( <YA_InfoIcon {...props}/> );
export const ShowIcon: FC<IIconsProps> = (props) => ( <YA_ShowIcon {...props}/> );
export const HideIcon: FC<IIconsProps> = (props) => ( <YA_HideIcon {...props}/> );
export const LogoutIcon: FC<IIconsProps> = (props) => ( <YA_LogoutIcon {...props}/> );
export const DeleteIcon: FC<IIconsProps> = (props) => ( <YA_DeleteIcon {...props}/> );
export const ArrowUpIcon: FC<IIconsProps> = (props) => ( <YA_ArrowUpIcon {...props}/> );
export const ArrowDownIcon: FC<IIconsProps> = (props) => ( <YA_ArrowDownIcon {...props}/> );
export const MenuIcon: FC<IIconsProps> = (props) => ( <YA_MenuIcon {...props}/> );


