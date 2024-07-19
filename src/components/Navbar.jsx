import "./navbar.css"

import { test_logo, settings, more_vert } from '../assets'

import { navButtons, doctorInfo } from '../constants'

import { NavbarButton, DoctorInfo } from './'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img className="TestLogo" src={test_logo} />
        <div className="buttons">
            {
                navButtons.map((button,index) => 
                    <NavbarButton ButtonContent={button.text} ButtonImage={button.image} IsActive={button.isActive} key={index}/>
                )
            }
        </div>
        <div className='right_section'>
            <DoctorInfo Doctor={doctorInfo}/>
            <div className="divider">

            </div>
            <div className="conf">
                <img src={settings} alt="settings" />
                <img src={more_vert} alt="more" />
            </div>
        </div>
    </div>
  )
}

export default Navbar