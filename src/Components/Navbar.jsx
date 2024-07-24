

const Navbar = () => {
  return (
    
      <nav className="flex justify-around bg-yellow-100 text-black py-2 pb-5">
            <img src="home.png" className="h-6 w-4" />
        <div className="logo flex" >
            <span className="font-bold text-xl mx-8 cursor-pointer hover:text-purple-300 hover:font-bold duration-200">
                Task
            </span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className="cursor-pointer hover:font-bold duration-200  hover:text-purple-300">
                Home
            </li >
            <li className="cursor-pointer hover:font-bold duration-200  hover:text-purple-300">Your Task</li>
        </ul>
      </nav>
    
  )
}

export default Navbar
