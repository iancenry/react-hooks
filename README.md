# React Hooks

## useState

- React has the notion of the state of the application, this is the whole thing i.e., the UI, the logic, the variables etc.
- This hook helps in changing the state by using a setter function to update the variable which will trigger a render. Without it, for example if value is stored in a variable, any changes eg in a counter will go up but won't reflect in the UI.

## useReducer

- It's an alternative to the useState hook, they both allow a dev to create vars that when values are changed the page will rerender.
- The advantage of useReducer is that in a situation where we have a trigger that triggers several actions, for example an onClick that updates two states using the set function, we should consider using the useReducer hook so that we dont have many different states and change them indivually.
- We can have a single state/system that will keep track of all the states that will be changed by a trigger and collectively manage them.
- Syntax const [varToHoldAllStates, dispatchFunction] = useReducer(reducerFunction, initialValueOfAllStates)
  - The dispatch function is used to change the states.
  - The reducer function manages what happens when we change the state, it takes in 2 arguments.
    1. state - so that you will have constant access to each of the states current value,
    2. action - what kind of action we are taking
  - We use a switch case to define the different actions.
- Helpful when dealing with really complex states.

```jsx
//using useState
const UseReducer = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setShowText(!showText);
        }}
      >
        Click Here
      </button>
      {showText && <p>Conditionally rendered text</p>}
    </div>
  );
};

//using useReducer
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
```

## useEffect

- Is called whenever a page rerenders/every time a state is changed unless stated otherwise. To make it called once you need to pass an array as an argument.
- Mostly used when making API calls.

## useRef

- Easiest way to access and manipulate DOM elements(virtual DOM) since we cant use vanilla js syntax such as 'getElementById' etc.
- Access current referenced element with `.current` and add `.` syntax to access all the properties an input element can have eg get an input's value with `.value` so `.current.value`

## useLayoutEffect

- Similar to useEffect the difference is that useLayoutEffect is called in an earlier stage of the page rendering.
- useEffect is called after everything is rendered into the page and shown to the user while useLayoutEffect is called before stuff is printed to the user.
- Can be used in instances where you want to change the layout of the app before it prints out to the user.

## useImperativeHandle

- Used in specific situations eg when creating a reusable component that needs to be invoked from the outside.
- From the example in the code we are calling a state from outside the component in the parent.
- Since you cant reference a component directly, we got to the child component and use `forwardRef` function which allows us to transform a functional component and allow it to accept a reference from parent.
-

## useContext

- Passing state as props from parent components to child components as in the first example below works for very simple cases. If we had a lot of states, it doesnt make sense passing all of them as props since it will make the code unmaintainable.
- The context api allows management of state more easily.
- The codes are just examples, it is recommended to separate the context logic in a separate file.

```jsx
// Before
// In UseContext.jsx
import { useState } from 'react';
import Login from './Login';
import User from './User';

const UseContext = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <Login setUsername={setUsername} /> <User username={username} />
    </div>
  );
};

// In Login.jsx
const Login = ({ setUsername }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setUsername(event.target.value)}
      />
    </div>
  );
};

// In User.jsx
const User = ({ username }) => {
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
};

// After - 1:04:40
```
