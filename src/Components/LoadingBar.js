import React from 'react';

export default ({ start, end }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue((start / end) * 100);
  }, [start, end]);

  return (
    <div id='outerLoadingBar'>
      <div id='loadingBar' style={{ width: `${value}%` }}></div>
    </div>
  );
};
