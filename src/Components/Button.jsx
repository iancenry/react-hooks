import { useState, forwardRef, useImperativeHandle } from 'react';

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleInParent() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

//not part of tutorial, fixes linting error
Button.displayName = 'Button';
export default Button;
