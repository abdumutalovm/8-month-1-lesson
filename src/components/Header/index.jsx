// All images start
import React from 'react'
import logo from '../../assets/logo.svg'
import main from '../../assets/main.svg'
import mainProfile from '../../assets/main profile.svg'
import person from '../../assets/mijozlarBazasi.svg'
import smsTracking from '../../assets/sms-tracking.svg'
import redirect from '../../assets/direct-send.svg'
import rectangle from '../../assets/rectangle.svg'

function Header() {
    return (
        <header>
            <div className='logo'>
                <a href="#"> <img src={logo} alt="company logo" className='logo' /></a>
            </div>

            <div className='header_menus'>
                <ul className='header-ul'>
                    <a href="#"><li className='header_li'><img src={main} alt="main" />Asosiy</li></a>
                    <a href="#"><li><img src={person} alt="img" />Mijozlar bazasi</li></a>
                    <a href="#"><li><img src={smsTracking} alt="img tracking" />Tracking loyihalari</li></a>
                    <a href="#"><li><img src={redirect} alt="redirect img" />Redirect loyihalari</li></a>
                </ul>
            </div>

            <div className='account'>
                <span className='mainProfile'><img src={mainProfile} alt="" /><h4>Austin Robertson</h4><img src={rectangle} alt="" /></span>
            </div>
        </header >
    )
}

export default Header