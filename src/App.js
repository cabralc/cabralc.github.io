import React from 'react';

import profilePic from './assets/anfield.JPG'
import resume from './assets/resume.pdf'
import Bio from './components/Bio';
import Profile from './components/Profile'


const App = () => {
  return (
    <div className='flex flex-row space-x-16'>
      <Bio bioText={"Software Engineer"} headerText={"Casey Cabral"} profilePic={profilePic} resume={resume} />
      <Profile />
    </div>
  )
}

export default App;
