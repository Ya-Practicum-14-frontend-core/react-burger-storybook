import React from "react";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export const CounterExample = () => {
    const [count, setCount] = React.useState<number>(0);

    return <Counter count={count} size={'default'} />;
};
