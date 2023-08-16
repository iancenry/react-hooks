import { useReducer } from 'react';

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1, showText: state.showText };
      case 'toggleShowText':
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'toggleShowText' });
        }}
      >
        Click Here
      </button>
      {state.showText && <p>Conditionally rendered text</p>}
    </div>
  );
};

export default UseReducer;
