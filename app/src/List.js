import React, { useEffect } from 'react';

const List = ({ data, fn }) => {
  // return(<pre>{JSON.stringify(data, null, 2)}</pre>)
  useEffect(() => {
    fn();
  }, [fn]);
  return (
    <ul>
      {' '}{data.employees.map(({ name, id }) =>
        <li key={id}>
          {name}
        </li>
      )}
    </ul>
  );
};

export default List;
