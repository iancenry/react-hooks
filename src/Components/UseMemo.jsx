import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';

const UseMemo = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => setData(res.data));
  }, [data]);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = '';
    for (const element of comments) {
      let currentName = element.name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log('THIS WAS COMPUTED');
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      {getLongestName}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>toggled</h1>}
    </div>
  );
};

export default UseMemo;
