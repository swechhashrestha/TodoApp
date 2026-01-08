import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div  className='bg-black p-5 text-white space-x-5 text-xl'>

        <NavLink  to='/'>Home</NavLink>
        <NavLink  to='/toDO'>ToDo</NavLink>
      
    </div>
  )
}

export default Header
