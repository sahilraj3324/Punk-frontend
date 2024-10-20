import logo from '../assets/logo.png'
const Navbar = () => {
  const navItems = [
    {link: "Overview", path: "home"},
    {link: "Features", path: "features"},
    {link: "About", path: "about"},
    {link: "Pricing", path: "pricing"},
  ]
  return (
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-first'>
      <div className="text-xl container mx-auto flex justify-between items-center font-medium">
        <div className="flex space-x-14 items-center">
            <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-first '>
                <img src={logo} alt="" className='w-10 inline-block items-center'/>
                <span >Punk </span>
            </a>
            <ul className='md:flex space-x-12 hidden'>
              {
                navItems.map(({link,path}) => <a key={link} href={path} className='block hover:text-grey-300'>{link}</a>)
              }
            </ul>
        </div>

        <div className="space-x-12 hidden md:flex items-center ">
          <a href='/' className='flex items-center hover:text-second'>Language</a>
          <button className='bg-second py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
