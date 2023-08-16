import { useRef } from 'react';

const UseRef = () => {
  //focus on input when button is clicked
  const inputRef = useRef(null);
  const onClick = () => {
    console.log(inputRef.current.focus());
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>Input a value</button>
    </div>
  );
};

export default UseRef;
