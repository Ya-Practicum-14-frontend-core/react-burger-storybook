import { Input as YA_Input} from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, MouseEvent, FocusEvent, RefObject } from 'react';

export interface IInputProps {
  type: "text" | "email" | "password" | undefined;
  placeholder: string | undefined
  value: string;
  name: string | undefined;
  success: boolean | undefined;
  error: boolean | undefined;
  disabled: boolean | undefined;
  icon: 
  "CurrencyIcon" |
  "BurgerIcon" |
  "LockIcon" |
  "DragIcon" |
  "DeleteIcon" |
  "ArrowUpIcon" |
  "ArrowDownIcon" |
  "MenuIcon" |
  "CloseIcon" |
  "CheckMarkIcon"|
  "ListIcon" |
  "ProfileIcon"|
  "EditIcon" |
  "InfoIcon" |
  "ShowIcon" |
  "HideIcon" |
  "LogoutIcon" |
  undefined;
  errorText: string | undefined;
  size?: "small" | "default" | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: (e: MouseEvent<HTMLDivElement>) => void;
  onBlur?: (e?: FocusEvent<HTMLInputElement> | undefined) => void;
  onFocus?: (e?: FocusEvent<HTMLInputElement> | undefined) => void;
  ref: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null;
  key: string | number | null | undefined;
}

/**
 * Primary UI component for user interaction
 */
export function Input(props: IInputProps): JSX.Element {
  return (
    <YA_Input {...props} />
  );
};



