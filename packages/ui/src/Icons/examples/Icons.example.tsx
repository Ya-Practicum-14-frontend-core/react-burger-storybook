import { warn } from "console";
import React, { FC } from "react";
import { useState } from "react";
import { IIconsProps,
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
  MenuIcon} from "../Icons"
import './IconsExample.css';

export const IconsExample: FC<IIconsProps> = ({type}) => {
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
        <div className="icon" onClick={handleClick}>
          CurrencyIcon
          <CurrencyIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          BurgerIcon
          <BurgerIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          LockIcon
          <LockIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          DragIcon
          <DragIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          CloseIcon
          <CloseIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          CheckMarkIcon
          <CheckMarkIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          ListIcon
          <ListIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          ProfileIcon
          <ProfileIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          EditIcon
          <EditIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          InfoIcon
          <InfoIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          ShowIcon
          <ShowIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          HideIcon
          <HideIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          LogoutIcon
          <LogoutIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          DeleteIcon
          <DeleteIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          ArrowUpIcon
          <ArrowUpIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          ArrowDownIcon
          <ArrowDownIcon type={type}/>
        </div>
        <div className="icon" onClick={handleClick}>
          MenuIcon
          <MenuIcon type={type}/>
        </div>
      </div>
      <div className={copied ? 'copied' : 'copied visible'}>Скопировано в буфер обмена</div>
    </div>
  )
}


