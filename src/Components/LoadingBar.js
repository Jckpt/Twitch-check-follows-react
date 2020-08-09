import React from 'react';

export default ({ allChatters, checkedViewers }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue((checkedViewers / allChatters) * 100);
  }, [allChatters, checkedViewers]);

  return (
    <div id='outerLoadingBar'>
      <div id='loadingBar' style={{ width: `${value}%` }}></div>
    </div>
  );
};
