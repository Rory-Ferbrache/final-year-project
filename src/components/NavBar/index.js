import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavBarElements"

const NavBar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
              <h1>Logo</h1>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="calculate" activeStyle>
                  Calculate
              </NavLink>
              <NavLink to="offset" activeStyle>
                  Offset
              </NavLink>
              <NavLink to="about" activeStyle>
                  About
              </NavLink>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="sign-up">Sign up</NavBtnLink> 
          </NavBtn>
        </Nav>
    </>
  )
}

export default NavBar
