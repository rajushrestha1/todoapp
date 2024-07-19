

const Navbar = () => {
  return (
    
      <nav className="flex justify-around bg-slate-600 text-white py-2">
        <div className="logo" >
            <span className="font-bold text-xl mx-8 cursor-pointer hover:text-yellow-300 hover:font-bold duration-200">
                Task
            </span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className="cursor-pointer hover:font-bold duration-200  hover:text-yellow-300">
                Home
            </li >
            <li className="cursor-pointer hover:font-bold duration-200  hover:text-yellow-300">Your Task</li>
        </ul>
      </nav>
    
  )
}

export default Navbar
