import React from 'react'
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer class="px-6 md:px-16 lg:px-24 xl:px-32">
    <div class="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500 w-full max-w-7xl mx-auto">
        <div>
            <img class="w-34 md:w-32" src={Logo} alt="dummyLogoColored" />
            <p class="max-w-[410px] mt-6">Our vision is to provide convenience and help increase your sales business.</p>
        </div>
        <div class="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
            <div>
                <h3 class="font-semibold text-base text-gray-900 md:mb-5 mb-2">About</h3>
                <ul class="text-sm space-y-1">
                    <li><a href="#" class="hover:underline transition">How it works</a></li>
                    <li><a href="#" class="hover:underline transition">Featured</a></li>
                    <li><a href="#" class="hover:underline transition">Partnership</a></li>
                    <li><a href="#" class="hover:underline transition">Bussiness Relation</a></li>
                </ul>
            </div>
            <div>
                <h3 class="font-semibold text-base text-gray-900 md:mb-5 mb-2">Community</h3>
                <ul class="text-sm space-y-1">
                    <li><a href="#" class="hover:underline transition">Events</a></li>
                    <li><a href="#" class="hover:underline transition">Blog</a></li>
                    <li><a href="#" class="hover:underline transition">Podcast</a></li>
                    <li><a href="#" class="hover:underline transition">Invite a friend</a></li>
                </ul>
            </div>
            <div>
                <h3 class="font-semibold text-base text-gray-900 md:mb-5 mb-2">Socials</h3>
                <ul class="text-sm space-y-1">
                    <li><a href="#" class="hover:underline transition">Discord</a></li>
                    <li><a href="#" class="hover:underline transition">Instagram</a></li>
                    <li><a href="#" class="hover:underline transition">Twitter</a></li>
                    <li><a href="#" class="hover:underline transition">Facebook</a></li>
                </ul>
            </div>
        </div>
    </div>
    <p class="py-4 text-sm md:text-base font-semibold max-w-7xl mx-auto w-full">
        © 2022 MORENT. All Right Reserved.
      </p>
</footer>
  )
}

export default Footer
