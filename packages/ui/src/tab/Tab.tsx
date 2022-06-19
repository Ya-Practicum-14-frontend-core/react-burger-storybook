import React, {Component, PropsWithChildren, FC} from 'react'
import { Tab as YA_Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export interface ITabProps {
  active: boolean;
  value: string;
  onClick: (value: string) => void;
  content: string;
}

export const Tab: FC<PropsWithChildren<ITabProps>> = ({ content, ...props}): JSX.Element => {
  return <YA_Tab {...props}> {content} </YA_Tab>
}