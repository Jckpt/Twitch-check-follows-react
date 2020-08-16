import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
export default ({ users }) => {
  const stinkers = ['overpow', 'rybsonlol_', 'vysotzky', 'randombrucetv', 'stazjaa', 'shini_waifu', 'kubon_', 'gilotyna', 'arquel', 'nervarien'];
  return (
    <div id='userList'>
      {users.map(({ avatar, nick, followLength }, id) => (
        <div className='userInfo' style={{ backgroundColor: stinkers.includes(nick) ? '#471c1c' : null }} key={id + 1}>
          <div>
            <a href={`https://www.twitch.tv/${nick}`}>
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
            </a>
          </div>
          <p className='nick'>{nick}</p>
        </div>
      ))}
    </div>
  );
};
