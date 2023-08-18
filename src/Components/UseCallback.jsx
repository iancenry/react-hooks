import axios from 'axios';
import { useCallback, useState } from 'react';
import Child from './Child';

const UseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState('Some comment');

  const returnComment = useCallback(() => {
    return data;
  }, [data]);

  return (
    <div>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>toggled</h1>}
    </div>
  );
};

export default UseCallback;
