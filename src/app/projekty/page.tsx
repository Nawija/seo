import { PROJECTS } from "@/constants/projects";
import Link from "next/link";

export default function ProjektyPage() {
    return (
        <div className="lg:py-12 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl mx-auto px-3">
            {PROJECTS.map((project) => (
                <div className="p-4 border border-border-primary bg-black/20 rounded-xl group relative overflow-hidden">
                    <img src={project.imgUrl} alt="nazoltej" />

                    <div className="text-center">
                        <h2 className="text-xl text-white capitalize py-4">
                            {project.name}
                        </h2>
                    </div>
                    <div className="flex items-center justify-center space-x-5 absolute top-0 left-0 -translate-y-full duration-150 group-hover:translate-y-0 h-full w-full transition-transform bg-black/50 backdrop-blur-md">
                        <Link href={`/projekty` + project.href}>
                            {project.name}
                        </Link>
                        <Link href={project.url} target="_blank">
                            OKO
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
