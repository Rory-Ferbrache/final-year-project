import React, { useState } from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, FaIcon } from "./NavBarElements"
import { auth } from "../../logic/firebase"
import { onAuthStateChanged} from 'firebase/auth';
import { faSeedling, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const NavBar = () => {

    const [user, setUser] = useState(auth.currentUser);
    onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
    });

  return (
    <>
      <Nav>
          <NavLink to="/">
          <FontAwesomeIcon icon={faSeedling}  size="2x" />
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="calculate" >
                  Calculate
              </NavLink>
              <NavLink to="offset" >
                  Offset
              </NavLink>
              <NavLink to="about" >
                  About
              </NavLink>
          </NavMenu>
          <NavBtn>
              {user ? <NavBtnLink to="account">{user?.displayName}</NavBtnLink> : <NavBtnLink to="log-in">Log in</NavBtnLink>}
          </NavBtn>
        </Nav>
    </>
  )
}

export default NavBar
