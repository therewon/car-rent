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
        <div className='max-w-7xl mx-auto flex justify-between items-center py-8'>
            <div className='flex gap-12 items-center'>
                <img src={Logo} alt="" />
                <div className='relative flex items-center w-120 border border-gray-300 p-2 rounded-3xl' >
                    <img src={SearchIcon} className='absolute left-3' alt="" />
                    <input type="text" placeholder='Search something here' className='ml-10' />
                    <img src={FilterIcon} className='absolute right-4' alt="" />
                </div>
            </div>

            <nav className='order-3 self-end'>
                <ul className='flex gap-8 items-center'>
                    <li className='rounded-full p-2 border border-gray-300'><img src={HeartIcon} alt="" /></li>
                    <li><img src={NotificationIcon} alt="" /></li>
                    <li><img src={SettingIcon} alt="" /></li>
                    <li>
                        <Show when="signed-out">
                            <SignInButton className='bg-[#3563E9] p-2 rounded-2xl text-white' />
                        </Show>
                        <Show when="signed-in">
                            <UserButton size={50}/>
                        </Show>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
