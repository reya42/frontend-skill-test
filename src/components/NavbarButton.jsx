import React from 'react'

const NavbarButton = ({ ButtonContent, ButtonImage, IsActive }) => {
  return (
    <div className={IsActive? "active button": "button"}>
        <div className='image_holder'>
            <img src={ButtonImage} alt={ButtonContent} />
        </div>
        <h1>
            {ButtonContent}
        </h1>
    </div>
  )
}

export default NavbarButton