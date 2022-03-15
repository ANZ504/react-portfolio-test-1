import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillDribbbleSquare} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/anzdev/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://dribbble.com/ANZ504" target="_blank"><AiFillDribbbleSquare/></a>
        <a href="https://github.com/ANZ504?tab=repositories" target="_blank"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials