import AboutMe from "@/components/Home/AboutMe";
import Projects from "@/components/Home/Projects";
import Head from "next/head";
export default function Home() {
  const projects = [
    {
      slug: 'https://nei-market-analytics.vercel.app/',
      name: 'NEI Market Analytics',
      description: "Criação de interface usando o Framework Vue.js"
    },
    {
      slug: 'https://quest-pokedex-five.vercel.app/',
      name: 'Pokedex',
      description: "Projeto usando React e Vite para criação da interface, utilização de testes unitários usando Jest para teste com API, consumo de API externa para exibição de dados"
    },
  ];

  return (
    <>
    <Head>
      <title>Sobre mim | Israel Pina</title>
      <meta name="description" content="Sou um Desenvolvedor Web apaixonado em criar soluções digitais e ajudar empresas a alcancar seus objetivos e ajudar com icentivo a devs novatos a entrarem no mercado de Programação ou TI" />
      
    </Head>
    <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
      <AboutMe/>
      <Projects projects={projects}/>
    </div>
    </>
  );
}
