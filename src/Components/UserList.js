import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
export default ({ users }) => {
  return (
    <div id='userList'>
      {users.sort((first, second) => {
            return first.followLength > second.followLength ? -1 : 1;
          }).map(({ avatar, nick, followLength }, id) => (
        <div className='userInfo' key={id + 1}>
          <div>
            <a href={`https://www.twitch.tv/${nick}`} target="_blank" rel="noopener noreferrer">
              <Tippy
                content={<span style={{ fontSize: '25px' }}>{`${followLength} dni`}</span>}
                placement='left'
                animation='scale-subtle'
                arrow={false}
                duration={200}
                delay={[75, 0]}
                distance={8}>
                <img className='avatarImage' loading='lazy' src={avatar} alt='' />
              </Tippy>
            </a>
          </div>
          <p className='nick'>{nick}</p>
        </div>
      ))}
    </div>
  );
};
