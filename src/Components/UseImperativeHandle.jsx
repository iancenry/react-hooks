import { useRef } from 'react';
import Button from './Button';

const UseImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <button onClick={() => buttonRef.current.toggleInParent()}>
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHandle;
