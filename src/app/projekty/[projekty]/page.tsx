import { PROJECTS } from "@/constants/projects";

export default function ProjektyPage() {
    return (
        <div className="lg:py-12 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((project, index) => (
                <div key={index} className="p-10">
                    <img src={project.imgUrl} alt="nazoltej" />
                </div>
            ))}
        </div>
    );
}
