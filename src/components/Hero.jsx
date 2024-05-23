import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex items-center bg-white h-screen">
       <div className="align-element">
            <article className="flex flex-col items-center">
                <h1 className="xl:text-7xl md:text-6xl text-5xl font-bold tracking-wider">I'm Felipe Silva</h1>
                <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">Full Stack Developer</p>
                <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">Hard work, clean code and great results</p>
                <div className="flex gap-x-4 mt-4">
                    <a href="https://github.com/Fjdsilv" target='_blank'>
                        <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                    </a>   
                    <a href="https://www.linkedin.com/in/fjdsilv" target='_blank'>
                        <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                    </a>  
                    {/* <a href="#">
                        <FaSquareXTwitter className="h-8 w-8 text-slate-500 hover:text-black duration-300"/>
                    </a>   */}
                </div>
            </article>
       </div>
    </div>
  )
}

export default Hero