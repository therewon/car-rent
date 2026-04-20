import React from 'react'
import Logo from '../assets/Logo.png'
import SearchIcon from '../assets/search-normal.svg'
import FilterIcon from '../assets/filter.svg'
import HeartIcon from '../assets/heart.png'
import NotificationIcon from '../assets/notification.png'
import SettingIcon from '../assets/setting-2.png'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Heart, Bell, Settings, Search, SlidersHorizontal } from "lucide-react";


const Navbar = () => {
    return (
        <header className="w-full border-b border-gray-200">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 md:px-6 lg:px-8">

                {/* Left */}
                <div className="flex items-center gap-4 md:gap-10">
                    <img src={Logo} alt="" />

                    {/* Desktop Search */}
                    <div className="hidden md:flex">
                        <div className="flex h-14 w-105 items-center justify-between rounded-full border border-gray-200 px-5">
                            <div className="flex items-center gap-3 text-gray-500">
                                <Search size={25} />
                                <input
                                    type="text"
                                    placeholder="Search something here"
                                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                                />
                            </div>

                            <button className="text-gray-500">
                                <SlidersHorizontal size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Desktop */}
                <div className="hidden items-center gap-3 md:flex">
                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50">
                        <Heart size={18} />
                    </button>

                    <div className="relative">
                        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50">
                            <Bell size={18} />
                        </button>
                        <span className="absolute right-3 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
                    </div>

                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50">
                        <Settings size={18} />
                    </button>

                    <Show when="signed-out">
                        <SignInButton className='bg-[#3563E9] p-2 rounded-2xl text-white' />
                    </Show>
                    <Show when="signed-in" className=''>
                        <UserButton />
                    </Show>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="px-4 pb-5 md:hidden">
                <div className="mb-6 flex items-start justify-between">
                    <h1 className="text-4xl font-bold tracking-tight text-blue-600">
                        MORENT
                    </h1>

                    <img
                        src="https://i.pravatar.cc/100?img=12"
                        alt="profile"
                        className="h-14 w-14 rounded-full object-cover"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex h-16 flex-1 items-center gap-3 rounded-3xl border border-gray-200 px-5">
                        <Search size={28} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search something here"
                            className="w-full bg-transparent text-lg text-gray-600 outline-none placeholder:text-gray-400"
                        />
                    </div>

                    <button className="flex h-16 w-16 items-center justify-center rounded-3xl border border-gray-200 text-gray-500">
                        <SlidersHorizontal size={28} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;