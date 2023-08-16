import { useState } from 'react';

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>{' '}
    </div>
  );
};

export default UseStateHook;
