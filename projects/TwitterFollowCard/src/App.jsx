import { useState } from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';
import './App.css';

/* 
  https://pbs.twimg.com/profile_images/1650412433557561344/m_cqtIdl_400x400.jpg 
  https://pbs.twimg.com/profile_images/1632687742734725120/tUoUEcMw_400x400.jpg
  1631815075752292352/g0Qtwb8z_400x400
*/

const users = [
  {
    id : 1,
    UserName: "petrogustavo",
    name: "Gustavo Petro",
    initialIsFollowing: true,
    NameImg: "1631815075752292352/g0Qtwb8z_400x400"
  },

  {
    id : 2,
    UserName: "ManCity",
    name: "Manchester City",
    initialIsFollowing: false,
    NameImg: "1632687742734725120/tUoUEcMw_400x400"
  },

  {
    id : 3,
    UserName: "FCBarcelona",
    name: "FC Barcelona",
    initialIsFollowing: true,
    NameImg: "1650412433557561344/m_cqtIdl_400x400"
  },
]

function App() {

  return (
    <>
      <div className='tw-wrapper'>
        <h3>Who to follow</h3>

        {
          users.map(user => {
            const {id, UserName, name, initialIsFollowing, NameImg} = user
            return (
              <TwitterFollowCard
                key={id}
                UserName={UserName}
                name={name}
                initialIsFollowing={initialIsFollowing}
                NameImg={NameImg}
              />
            )

          })
        }

      </div>
    </>
  )
}

export default App
