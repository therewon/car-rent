import React from 'react'
import Logo from '../assets/Logo.png'
import SearchIcon from '../assets/search-normal.svg'
import FilterIcon from '../assets/filter.svg'
import HeartIcon from '../assets/heart.png'
import NotificationIcon from '../assets/notification.png'
import SettingIcon from '../assets/setting-2.png'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

const Header = () => {
    return (
        <div>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <img src={SearchIcon} alt="" />
                <input type="text" placeholder='Search something here' />
                <img src={FilterIcon} alt="" />
            </div>
            <nav>
                <ul>
                    <li><img src={HeartIcon} alt="" /></li>
                    <li><img src={NotificationIcon} alt="" /></li>
                    <li><img src={SettingIcon} alt="" /></li>
                    <li>
                        sign
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
