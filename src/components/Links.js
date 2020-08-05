import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Links = () => {
    return (
        <div className="space-x-2 float-right">
            <a href="https://github.com/cabralc"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="mailto: casey.cabral@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
    )
}

export default Links