'use client';
import Link from "next/link"
import { useState } from 'react';
import { NAV_LIST } from "@/types/navbar"
import logo from '@/public/images/img_logo.svg'
import cart_icon from '@/public/images/img_cart.svg'
import Image from "next/image"
import { usePathname } from "next/navigation"
import { PiListLight } from 'react-icons/pi';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export const Navbar: React.FC = () => {

    const path = usePathname();
    const navList: NAV_LIST[] = [
        {
            url: '/',
            name: 'Home'
        },
        {
            url: '/menu',
            name: 'Menu'
        },
        {
            url: '/order',
            name: 'Order online'
        },
        {
            url: '/about-us',
            name: 'About us'
        },
        {
            url: '/contact-us',
            name: 'Contact us'
        },
        {
            url: '/reservation',
            name: 'Reservation'
        }
    ]

    return (
        <nav>
            <Sheet>
                <ul className="hidden h-28 items-center justify-around min-[780px]:flex">
                    <li>
                        <Link href='/'><Image src={logo} width={120} height={120} alt="Logo" /></Link>
                    </li>
                    <li className="flex items-center md:gap-14 sm:gap-8">
                        {
                            navList.map(({ name, url }) => {
                                return (
                                    <Link key={url} href={url} className={`group ${path === url ? 'active' : ''}`}>
                                        <p className={`${path === url ? 'text-primary text-base font-semibold font-primary' : 'font-[500]'}`}>{name}</p>
                                        {path === url ?
                                            <div className="w-5/6 bg-primary h-[3px] rounded-full" /> :
                                            <div className="w-0 bg-primary h-[3px] rounded-full transition-all duration-500 group-hover:w-full" />
                                        }
                                    </Link>
                                )
                            })
                        }
                    </li>
                    <li className="flex gap-4 max-[920px]:hidden">
                        <button className="w-10 h-10 flex justify-center items-center rounded-full bg-primary">
                            <Image src={cart_icon} width={24} height={24} alt="CART_IMAGE" />
                        </button>
                        <button className="w-24 h-10 bg-primary text-lg rounded-xl text-white font-medium font-primary">Log in</button>
                    </li>
                    <li className="min-[920px]:hidden">
                        <button className="w-10 h-10 flex justify-center items-center rounded-full bg-primary">
                            <Image src={cart_icon} width={24} height={24} alt="CART_IMAGE" />
                        </button>
                    </li>
                </ul>
                <ul className="hidden max-[780px]:flex h-28 items-center justify-between mx-6">
                    <li className="flex gap-4">
                        <SheetTrigger className="text-black text-4xl"><PiListLight /></SheetTrigger>
                        <Link href='/'><Image src={logo} width={120} height={120} alt="Logo" /></Link>
                    </li>
                    <li className="flex gap-4">
                        <button className="w-10 h-10 flex justify-center items-center rounded-full bg-primary">
                            <Image src={cart_icon} width={24} height={24} alt="CART_IMAGE" />
                        </button>
                        <div className="w-24 h-10 flex items-center justify-center bg-primary text-lg rounded-xl text-white font-medium font-primary">Log in</div>
                    </li>
                </ul>
                <SheetContent className="w-80 p-4" side='left'>
                    <div>
                        <ul>
                            <li className="w-full flex justify-between">
                                <Link href='/'><Image src={logo} width={120} height={120} alt="Logo" /></Link>
                            </li>
                            <li className="flex flex-col items-start gap-6 mx-1 mt-6">
                                {navList.map(({ name, url }) => {
                                    return (
                                        <SheetClose key={url}>
                                            <Link className="w-fit" href={url}>
                                                <p className={`${path === url ? 'font-semibold text-primary' : 'font-medium'} text-xl`}>{name}</p>
                                                {path === url && <div className="w-5/6 bg-primary h-[3px] rounded-full" />}
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </li>
                        </ul>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    )
}