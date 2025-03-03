import { MenuCloseIcon } from "@/components/icons/MenuCloseIcon";
import Link from "next/link";
import Image from "next/image";

interface MenuProps {
    isVisible: boolean;
    onClose: () => void;
}
export default function Menu({isVisible, onClose}: MenuProps) {
    return (
        <div className={`${isVisible ? 'flex' : 'hidden'}
        fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden`}
        onClick={onClose}>
            <div className="w-full bg-h-gray-500 h-96 shadow-md py-4 px-5"
            onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between mb-5">
                    <Link href="/">
                        <Image src="/favicon.ico" width={55} height={55} alt="Icone da LogoMarca "/>
                    </Link>
                    <button onClick={onClose}>
                        <MenuCloseIcon className="fill-h-black-500 w-10 h-10" />
                    </button>
                </div>
                <nav className="flex flex-col items-center text-xl p-5 gap-5">
                    <Link href="/" onClick={onClose}>Sobre mim</Link>
                    <Link href="/contatos" onClick={onClose}>Entre em Contatos</Link>
                </nav>
            </div>
        </div>
    )
}