import axios from 'axios';
import { useEffect, useState } from 'react';

const UseEffect = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => setData(res.data));
  }, [data]);

  return <div>{data?.[0].email}</div>;
};

export default UseEffect;
