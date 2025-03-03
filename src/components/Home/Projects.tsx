import type { Project } from "@/types/Home";
import Link from "next/link";
interface ProjectsProps {
    projects: Project[];
}
export default function Projects({ projects }: ProjectsProps) {
    return (
        <article className="space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left ">
            <h2 className="text-3xl md:5xl font-bold">Projetos Recentes : </h2>
            <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
                {projects.map(({ slug, name, description }) => {
                    const isExternal = slug.startsWith('http');

                    return isExternal ? (
                        <a
                            href={slug}
                            key={name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-md relative"
                        >
                            <li className="font-bold text-1xl py-2 flex flex-col">
                                <p className="text-md relative">{name}</p>
                                <p className="font-thin text-1xl py-2">{description}</p>
                            </li>
                        </a>

                    ) : (
                        <Link href={`/projects/${slug}`} key={name}>
                            <li className="text-md relative" key={name}>
                                <p className="font-bold text-1xl py-2">{name}</p>
                                <p>{description}</p>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </article>
    )
}