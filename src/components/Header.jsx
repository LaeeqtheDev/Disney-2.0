import React, { useState } from 'react';
import Logo from "../assets/Images/logo.png";
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus } from "react-icons/hi2";
import HeaderItem from './HeaderItem';
import { HiDotsVertical } from "react-icons/hi";

function Header() {

    const [toggle, setToggle] = useState(true);

    const menu = [
        {
            name: 'Home',
            icon: HiHome
        },
        {
            name: 'Search',
            icon: HiMagnifyingGlass
        },
        {
            name: 'Watch List',
            icon: HiPlus
        },
        {
            name: 'Orignals',
            icon: HiStar
        },
        {
            name: 'Movies',
            icon: HiPlayCircle
        },
        {
            name: 'Series',
            icon: HiTv
        },
    ];

    return (
        <div className='bg-black flex  justify-between p-5 ' >
            <div className='flex gap-8 items-center '>
                <img src={Logo} alt="logo" className=' w-[80px] md:w-[115px] lg:w-[200px] object-contain' />
                <div className=' hidden md:flex gap-8'>
                    {menu.map((item, index) => (
                        <HeaderItem key={index} name={item.name} Icon={item.icon} />
                    ))}
                </div>

                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem key={index} name={''} Icon={item.icon} />
                    ))}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle ? <div className='absolute mt-3 bg-[#00000012] border-[1px] p-3 border-gray-700 px-5 py-4 '>
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItem key={index} name={item.name} Icon={item.icon} />
                            ))}
                        </div> : null}
                    </div>
                </div>

            </div>
            <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' className='w-[40px]' />
        </div>
    )
}

export default Header;
