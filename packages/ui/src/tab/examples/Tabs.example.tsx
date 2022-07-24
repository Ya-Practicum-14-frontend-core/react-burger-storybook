import {useState} from "react";
import { Tab } from "../Tab";

export const TabsExample = () => {
  const [current, setCurrent] = useState('one')
  return (
    <div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent} content={'one'} />
      <Tab value="two" active={current === 'two'} onClick={setCurrent} content={'two'} />
      <Tab value="three" active={current === 'three'} onClick={setCurrent} content={'three'} />
    </div>
    )
}
