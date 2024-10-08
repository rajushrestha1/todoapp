
const Navbar = () => {
  return (
    
      <nav className="flex justify-around bg-slate-700 text-white py-2 pb-5 max-sm:text-left ">
            <img src="logo1.png" className="h-7 max-sm:hidden " />
        <div className="logo flex" >
            <span className="font-bold text-xl mx-8 cursor-pointer hover:text-cyan-400 hover:font-bold duration-200">
                Task
            </span>
        </div>
        <ul className="flex gap-8 mx-9 ">
            <li className="cursor-pointer hover:font-bold duration-200  hover:text-cyan-400">
                Home
            </li >
            <li className="cursor-pointer hover:font-bold duration-200  hover:text-cyan-400">Your Task</li>
        </ul>
        <div className="folt-bold cursor-pointer hover:font-bold duration-200  hover:text-cyan-400 ">
            <a href="https://rajushhrestha.netlify.app/" >Portfolio</a>
        </div>
      </nav>
    
  )
}

export default Navbar
