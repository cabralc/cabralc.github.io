import React from 'react'

import BioText from './BioText'
import HeaderText from './HeaderText'
import Image from './Image'
import Resume from './Resume'
import Links from './Links'

const Bio = ({ profilePic, headerText, bioText, resume }) => {

  return (
    <div className="h-screen max-w-sm overflow-hidden shadow-lg bg-white">
      <Image imageSrc={profilePic} />
      <div className="float-right text-right px-6 py-4">
        <HeaderText text={headerText} />
        <BioText text={bioText} />
        <Resume resume={resume} />
        <Links />
      </div>
    </div>
  )
}

export default Bio

