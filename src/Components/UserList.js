import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
export default ({ users }) => {
  return (
    <div id='userList'>
      {users.map(({ avatar, nick, followLength }, id) => (
        <div className='userInfo' key={id + 1}>
          <div>
            <Tippy
              content={<span style={{ fontSize: '25px' }}>{`${followLength} dni`}</span>}
              placement='left'
              animation='scale-subtle'
              arrow={false}
              duration={200}
              delay={[75, 0]}
              distance={8}>
              <img className='avatarImage' src={avatar} alt='' />
            </Tippy>
          </div>
          <p className='nick'>{nick}</p>
        </div>
      ))}
    </div>
  );
};
