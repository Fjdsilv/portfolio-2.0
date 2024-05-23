import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <div className="bg-white">
        <section className='py-20 align-element' id="projects">
        <SectionTitle text="web creations"/>
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {
                projects.map((project) => {
                    return <ProjectsCard id={project.id} {...project} />
                })
            }
        </div>
        </section>
    </div>
  )
}

export default Projects