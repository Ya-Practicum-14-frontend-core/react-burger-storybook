import React from "react";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export const CounterExample = (props: {count: number; size: 'small' | 'default' | undefined} ) => {
    return (
      <div style={{position:'relative', padding:20}}>
          <Counter count={props.count} size={props.size} />
      </div>
    );
};
