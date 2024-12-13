import Header from "./Header";
import { JetBrains_Mono } from "next/font/google";

interface LayoutProps {
    children: React.ReactNode
}

const jetbrains_mono = JetBrains_Mono({
    subsets: ['latin'],
    weight: '400',
})

export default function Layout({ children }: LayoutProps){
    return (
        <div className={jetbrains_mono.className}>
            <Header />
            {children}
        </div>
    );
};