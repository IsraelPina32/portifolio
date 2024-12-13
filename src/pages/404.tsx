import Head from "next/head";
import Link from "next/link";
import {Roboto} from 'next/font/google'


const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
});

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 | Israel Pina</title>
            </Head>
            <div className="flex flex-col gap-3 items-center text-center mt-12 md:mt-24 py-8 md:py-4 px-6 md:px-32">
                <h1 className="text-5xl sm:text-7xl font-bold ">404 Not Found</h1>
                <p className="flex flex-col gap-8 py-8 md:py-4 md:text-xl ">
                    <span>
                        Desculpe, essa pagina nao foi encontrada
                    </span>
                    <span>Clique no botão abaixo para voltar para a pagina inicial</span>
                </p>
                <Link href="/" className={`${roboto.className} p-4 bg-h-black-500 text-white mt-5 md:mt-12 w-fit rounded-xl transition-all hover:bg-opacity-80`}>Ir para a pagina inicial</Link>
            </div>
        </>
    )
}