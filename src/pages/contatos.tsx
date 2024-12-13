import CopyButton from "@/components/commons/Header/CopyButton";
import Head from "next/head";
export default function Contatos() {
    return (
        <>
        <Head>
            <title>Contatos | Israel Pina</title>
        </Head>
        <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
            <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
            <ul className="table mx-auto space-y-6 md:space-y-8">
                <li className="md:text-xl">
                    <span className="font-bold">E-mail</span>
                    <div className="flex gap-1 md:gap-3 items-center ">
                    <a 
                    href="mailto:israelcoimbra4142@gmail.com" className="text-sm md:text-lg text-slate-900 underline truncate">israelcoimbra4142@gmail.com</a>
                    <CopyButton textToCopy="israelcoimbra4142@gmail.com"/>
                    </div>
                </li>
                <li className="md:text-xl">
                    <span className="font-bold">LinkedIn</span>
                    <div className="flex gap-1 md:gap-3 items-center">
                    <a href="https://www.linkedin.com/in/israel-coimbra-de-pina/" className="text-sm md:text-lg text-slate-900 underline truncate">https://www.linkedin.com/in/israel-coimbra-de-pina/</a>
                    </div>
                </li>
                <li className="md:text-xl">
                    <span className="font-bold">Github</span>
                    <div className="flex gap-1 md:gap-3 items-center">
                    <a 
                    href="https://github.com/IsraelPina32" className="text-sm md:text-lg text-slate-900 underline truncate">https://github.com/IsraelPina32</a>
                    </div>
                </li>
                <li className="md:text-xl">
                    <span className="font-bold">Instagram</span>
                    <div className="flex gap-1 md:gap-3 items-center">
                    <a 
                    href="https://www.instagram.com/israel_dev26/" className="text-sm md:text-lg text-slate-900 underline truncate">https://www.instagram.com/israel_dev26/</a>
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}