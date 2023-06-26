import React, { useContext } from 'react'
import { Link,  } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

const Navbar = () => {
const { theme, handleTheme} = useContext(ContextGlobal)

  return (
    <nav className="nav" style={{background: theme.navBackground}}>
      <Link to={'/'}><h2 className='icono' style={{color: theme.color}}><span>D</span>H Clínica Odontológica</h2></Link>
      <div className='divNav'>
        <img src="" alt="" />
      <Link to={'/'} style={{color: theme.color}}>Home</Link>
      <Link to={'/contact'} style={{color: theme.color}}>Contact</Link>
      <Link to={'/favs'} style={{color: theme.color}}>Favs</Link>
      <button onClick={handleTheme}>🌙</button>
      </div>
    </nav>
  )
}

export default Navbar