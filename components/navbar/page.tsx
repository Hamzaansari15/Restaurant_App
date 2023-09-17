'use client';
import Link from "next/link"
import { NAV_LIST } from "@/types/navbar"
import logo from '@/public/images/img_logo.svg'
import cart_icon from '@/public/images/img_cart.svg'
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"

export const Navbar: React.FC = () => {

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
    // const router = useRouter();
    const path = usePathname();
    console.log(path)

    return (
        <nav>
            <ul className="flex h-28 items-center justify-around">
                <li>
                    <Link href='/'><Image src={logo} width={120} height={120} alt="Logo" /></Link>
                </li>
                <li className="flex items-center gap-14">
                    {
                        navList.map(({ name, url }) => {
                            return (
                                <Link key={url} href={url} className={`group ${path === url ? 'active' : ''}`}>
                                    <p className={`${path === url ? 'text-primary text-base font-semibold font-primary' : 'font-[500]'}`}>{name}</p>
                                    {path === url ?
                                        <div className="w-5/6 bg-primary h-[3px] rounded-full transition-all duration-300" /> :
                                        <div className="w-0 bg-primary h-[3px] rounded-full transition-all duration-500 group-hover:w-full" />
                                    }
                                </Link>
                            )
                        })
                    }
                </li>
                <li className="flex gap-4">
                    <button className="w-10 h-10 flex justify-center items-center rounded-full bg-primary">
                        <Image src={cart_icon} width={24} height={24} alt="CART_IMAGE" />
                    </button>
                    <button className="w-24 h-10 bg-primary text-lg rounded-xl text-white font-medium font-primary">Log in</button>
                </li>
            </ul>
        </nav>
    )
}