import React, { useState } from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';
import './App.css';

/* 
  https://pbs.twimg.com/profile_images/1650412433557561344/m_cqtIdl_400x400.jpg 
  https://pbs.twimg.com/profile_images/1632687742734725120/tUoUEcMw_400x400.jpg
  1631815075752292352/g0Qtwb8z_400x400
*/

function App() {



  return (
    <>
      <div className='tw-wrapper'>
        <h3>Who to follow</h3>
        <TwitterFollowCard
          UserName={"petrogustavo"}
          name={"Gustavo Petro"}
          isFollowing={false}
          NameImg={"1631815075752292352/g0Qtwb8z_400x400"}
        />
        <TwitterFollowCard
          UserName={"ManCity"}
          name={"Manchester City"}
          isFollowing={false}
          NameImg={"1632687742734725120/tUoUEcMw_400x400"}
        />
        <TwitterFollowCard
          UserName={"FCBarcelona"}
          name={"FC Barcelona"}
          isFollowing={false}
          NameImg={"1650412433557561344/m_cqtIdl_400x400"}
        />
      </div>
    </>
  )
}

export default App
