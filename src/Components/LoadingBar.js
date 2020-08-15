import React from 'react';

export default ({ start, end }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue((start / end) * 100);
  }, [start, end]);

  return (
    <div id='outerLoadingBar'>
      <div id='loadingBar' style={{ width: end === 0 ? 0 : `${value}%` }}></div>
    </div>
  );
};
