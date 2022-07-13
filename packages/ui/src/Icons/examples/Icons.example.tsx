import React, { FC } from "react";
import {
  CurrencyIcon,
  BurgerIcon,
  LockIcon,
  DragIcon,
  CloseIcon,
  CheckMarkIcon,
  ListIcon,
  ProfileIcon,
  EditIcon,
  InfoIcon,
  ShowIcon,
  HideIcon,
  LogoutIcon,
  DeleteIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  MenuIcon,
  IconsList,
  IIconProps} from "../Icons"



export const IconsExample: FC<IIconProps> = ({type}) => {
  return (
    <IconsList type={type}>
      <>CurrencyIcon<CurrencyIcon type={type}/></>
      <>BurgerIcon<BurgerIcon type={type}/></>
      <>LockIcon<LockIcon type={type}/></>
      <>DragIcon<DragIcon type={type}/></>
      <>CloseIcon<CloseIcon type={type}/></>
      <>CheckMarkIcon<CheckMarkIcon type={type}/></>
      <>ListIcon<ListIcon type={type}/></>
      <>ProfileIcon<ProfileIcon type={type}/></>
      <>EditIcon<EditIcon type={type}/></>
      <>InfoIcon<InfoIcon type={type}/></>
      <>ShowIcon<ShowIcon type={type}/></>
      <>HideIcon<HideIcon type={type}/></>
      <>LogoutIcon<LogoutIcon type={type}/></>
      <>DeleteIcon<DeleteIcon type={type}/></>
      <>ArrowUpIcon<ArrowUpIcon type={type}/></>
      <>ArrowDownIcon<ArrowDownIcon type={type}/></>
      <>MenuIcon<MenuIcon type={type}/></>
    </IconsList>
  )
}