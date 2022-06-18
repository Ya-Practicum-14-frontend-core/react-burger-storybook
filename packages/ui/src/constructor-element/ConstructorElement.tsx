import React from 'react';
import { ConstructorElement as YA_ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';


import './ConstructorElement.css';

export interface IConstructorElementProps {
  type?: "top" | "bottom";
  text: string;
  thumbnail: string;
  price: number;
  isLocked?: boolean;
  handleClose?: (() => void);
}

/**
 * Primary UI component for user interaction
 */
export function ConstructorElement(props: IConstructorElementProps): JSX.Element {
  // const [isLockedCheck, setIsLockedCheck] = React.useState<boolean>(props.isLocked || false);

  // React.useEffect(() => {
  //   if (props.type === "top" || props.type === "bottom"){
  //     setIsLockedCheck(true);
  //   } else {
  //     setIsLockedCheck( props.isLocked || false);
  //   }
  // }, [props.type, props.isLocked]);

  return (
    <YA_ConstructorElement {...props} />
  );
};
