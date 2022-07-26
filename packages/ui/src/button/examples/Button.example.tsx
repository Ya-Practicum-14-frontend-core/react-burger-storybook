// @ts-nocheck
// В версии React для @ya.praktikum/react-developer-burger-ui-components и последующих версиях существует конфликт поэтому используем ts-ignore
import {useState, FC} from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { IButtonProps } from "../Button";

export const ButtonExample = () => {
  return (
    <Button onClick={console.log("Hello, World !")} name="btnName" type="primary" size="medium">Кнопка</Button>
    )
}
