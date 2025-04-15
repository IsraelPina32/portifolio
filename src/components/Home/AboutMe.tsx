import Image from "next/image";
import Link from "next/link";
import {Roboto} from 'next/font/google'


const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
});

export default function AboutMe() {
    return (
        <main className="flex flex-wrap-reverse justify-center items-center  gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between ">
            <div className="flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
                <h1 className="text-3xl sm:text-7x1 xl:leading-[5rem]">Prazer, sou&nbsp;
                <strong className="font-bold">Israel Pina</strong>
                </h1>      
                <div className="mb-12">
                    <h2 className={`${roboto.className} mb-12 text-1xl`}>Sou um Desenvolvedor Front-end com objetivo em criar soluções digitais para empresas a alcancar seus objetivos atráveis de interfaces dinâmicas, ajudo dev iniciantes e entrarem no mercado de programação com conteúdo.</h2>
                    <Link href="/contatos" className="p-3 bg-black text-slate-50 w-fit  text-xl rounded-xl transition all hover:bg-opacity-80">Converse Comigo</Link>
                </div>
                <h3 className="text-2xl font-bold">Minhas Skills</h3>
                <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl ">
                    <li style={{ backgroundColor: "#2F74C0", color: "#FFFFFF" }} className="w-fit p-2 rounded-md">Typescript</li>
                    <li style={{ backgroundColor: "#68DDFA", color: "#000000" }} className="w-fit p-2 rounded-md">React</li>
                    <li style={{ backgroundColor: "#EFD81D", color: "#000000" }} className="w-fit p-2 rounded-md">Javascript</li>
                    <li style={{ backgroundColor: "#000000", color: "#FFFFFF" }} className="w-fit p-2 rounded-md">Next.js</li>
                    <li style={{ backgroundColor: "#3C973A", color: "#FFFFFF" }} className="w-fit p-2 rounded-md">Node.js</li>
                </ul>
            </div>
            <div className="relative ">
                <Image src="https://avatars.githubusercontent.com/u/99025898?v=4" width={500} height={500} className="rounded-full"
                    unoptimized alt="Foto de Perfil Israel. Homem Elegante com uma roupa preta com um olhar cofiante." />
                <p className="p-4 w-fit text-base leading-tight bg-h-black-500 rounded-xl text-white absolute -bottom-[0.75rem] sm:bottom-3">
                    <strong className="text-4xl">3+</strong>
                    <br />
                    meses de experiência.
                </p>
            </div>
        </main>
    )
}