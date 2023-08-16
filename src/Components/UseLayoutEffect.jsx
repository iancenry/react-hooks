import { useLayoutEffect, useEffect, useRef } from 'react';

const UseLayoutEffect = () => {
  const inputRef = useRef(null);

  //you'll notice that when you refresh the useLayoutEffect logs PEDRO instead of hello since the useEffect changes the value later
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = 'hello';
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value="PEDRO"
        style={{ width: 400, height: 300 }}
      />
    </div>
  );
};

export default UseLayoutEffect;
