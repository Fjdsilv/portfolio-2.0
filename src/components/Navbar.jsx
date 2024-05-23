import { links } from '../data'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar bg-blue-500">
        <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 text-center">
            <h2 className="text-white text-3xl font-bold mb-2 md:mb-0">
                Felipe Silva 
            </h2>
            <div className="flex gap-x-3 mx-auto sm:mr-0">
            {links.map((link)=> {
                const { id, href, text } = link
                return <a key={id} href={href} className="text-white capitalize text-lg tracking-wide hover:text-blue-200 duration-300">{text}</a>
            })}
            </div>
        </div>
    </nav>
    </header>
  )
}

export default Navbar