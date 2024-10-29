
import { projects } from "@/data"
import ClientProjects from "./Projects"



const RecentProjects = () => {

    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                A small selection of {' '}
                <span className="text-purple">recent projects</span>
            </h1>

            <ClientProjects projects={projects} />

        </div>
    )
}

export default RecentProjects