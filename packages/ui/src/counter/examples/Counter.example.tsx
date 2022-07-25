import React from "react";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { ICounter } from "../Counter";

export const CounterExample = (props: ICounter ) => {
    return (
      <div style={{position:'relative', padding:20}}>
          <Counter count={props.count} size={props.size} />
      </div>
    );
};
