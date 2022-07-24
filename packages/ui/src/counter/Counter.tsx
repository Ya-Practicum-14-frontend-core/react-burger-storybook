import React from "react";
import { Counter as YA_Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export interface ICounter {
  /**
   * Счетчик — число выбранных ингредиентов
   */
  count: number;
  /**
   * Размер — строка, выбор из двух размеров
   */
  size: "default" | "small" | undefined;

}

/**
 Primary UI component for user interaction
 **/
export function Counter(props: ICounter): JSX.Element {
  return <YA_Counter {...props} />;
}
