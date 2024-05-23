import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({url, img, github, title, text}) => {
  return (
    <article className="bg-white shadow-md hover:shadow-xl duration-300">
        {/* <img 
            src={img} 
            alt={title}  
            lassName="w-full object-cover h-64"
        /> */}
        <div className="capitalize p-8">
            <div className="mt-4 flex gap-x-4">
                <a 
                    href={url} 
                    target='_blank'
                >
                    <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                </a>
                <a 
                    href={github}
                    target='_blank'
                >
                    <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                </a>
            </div>
            <h2 className="text-xl tracking-wide font-medium py-4">{title}</h2>
            <p className="text-slate-700 leading-loose">{text}</p>    
        </div>
    </article>
  )
}

export default ProjectsCard