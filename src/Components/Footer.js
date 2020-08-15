import React from 'react';

export default () => {
  const avatar = 'https://static-cdn.jtvnw.net/jtv_user_pictures/eac721cd-765c-4dad-b93e-71b663c144fa-profile_image-70x70.png';
  return (
    <footer>
      <a href='https://www.twitch.tv/krawcu_' target='_blank' rel='noopener noreferrer'>
        <img src={avatar} alt='' />
      </a>
      <a href='https://github.com/Jckpt/Twitch-check-follows-react' target='_blank' rel='noopener noreferrer'>
        <p id='sourceCode'>kod źródłowy</p>
      </a>
    </footer>
  );
};
