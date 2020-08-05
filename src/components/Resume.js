import React from 'react'
import BoldText from './BoldText'

const Resume = ({resume}) => {
    return (
        <div>
            <a href={resume}><BoldText text={"Resume"} /></a>
        </div>
    )
}

export default Resume