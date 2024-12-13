import Image from "next/image";
import Link from "next/link";
import {Roboto} from 'next/font/google'
import Menu from "./Menu";
import { useCallback, useState } from "react";
import MenuIcon from "@/components/icons/MenuIcon";


const roboto = Roboto({
    subsets: ['latin'],
    weight: '500',
}); 
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = useCallback(() => {
        setIsMenuOpen(true);
    }, [])

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, [])


    return (
        <header className={`${roboto.className} bg-h-gray-500 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}>
        <Link href="/">
            <Image src="/favicon.ico" width={55} height={55} alt="Logo da Logo Marca de Israel Pina" />
        </Link>
        <button className="p-1 md:hidden" onClick={openMenu}>
            <MenuIcon className="fill-h-black-500 w-10 h-10" />
        </button>
        <nav className="hidden md:flex items-center gap-10">
            <Link href="/">Sobre Mim</Link>
            {/* <Link href="/">Portifolio</Link> */}
            <Link href="/contatos">Entre em Contato </Link>
        </nav>
        <Menu isVisible={isMenuOpen} onClose={closeMenu}/>
    </header>
    )
}