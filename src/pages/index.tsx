import AboutMe from "@/components/Home/AboutMe";
import Projects from "@/components/Home/Projects";
import Head from "next/head";
export default function Home() {
  const projects = [
    {
      slug: 'https://nei-market-analytics.com.br/',
      name: 'NEI Market Analytics',
      description: "Produto com foco em análise de mercado, com gráficos e relatórios,  o foco desde produto e aumentar a eficiência do clientes nas moedas tanto globais quanto as digitais como o Bitcon e Ethereum. as tecnologias utilizadas  Vue.js, Typescript, TailwindCss, Docker, Node.js"
    },
    {
      slug: 'https://github.com/IsraelPina32/Sistema-Notas',
      name: 'Sistema de Notas',
      description: "Projeto focado para me aprofunda mais em conhecimentos de Front-end este projeto é um sistemas de notas onde o usúario pode adicionar,editar e deletar suas notas. as Tecnologias utilizadas TailwindCss e Vue.js."
    },
  ];

  return (
    <>
    <Head>
      <title>Sobre mim | Israel Pina</title>
      <meta name="description" content="Sou um Desenvolvedor Front-end com foco em criar soluções digitais e ajudar empresas a alcancar seus objetivos com interfaces dinâmicas e ajudar com icentivo a devs iniciantes a entrarem no mercado de Programação." />
      
    </Head>
    <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
      <AboutMe/>
      <Projects projects={projects}/>
    </div>
    </>
  );
}
