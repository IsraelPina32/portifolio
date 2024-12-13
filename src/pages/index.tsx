import AboutMe from "@/components/Home/AboutMe";
import Projects from "@/components/Home/Projects";
import Head from "next/head";
export default function Home() {
  const projects = [
    {
      slug: 'NEI_market_analytics',
      name: 'NEI Market Analytics',
      description: "Responsabilidades: Criação do Front-end usando o Framework Vue.js,"
    },
    {
      slug: 'Vitrive-Front',
      name: 'Vitrive-Front',
      description: "Responsabilidades: Criação de toda a interface do site usando React, Typescript e tailwind css, criação de APIS para autenticação de login para os usuários com React, Criação de Cookies para os usuários e responsável pelas etapas de testes unitários usando o Vitest."
    },
    {
      slug: 'Project Github API',
      name: 'Project Github API',
      description: "Crianção da interface usando html , css e javascript para o consumo da API do github."
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
