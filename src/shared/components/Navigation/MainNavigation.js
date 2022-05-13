import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer.js'
import Backdrop from '../UIElements/Backdrop'

import './MainNavigation.css'

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerisOpen] = useState(false)

  const openDrawerHandler = () => {
    setDrawerisOpen(true)
  }
  const closeDrawerHandler = () => {
    setDrawerisOpen(false)
  }

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks onClick={closeDrawerHandler} />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span className="top" />
          <span />
          <span className="bottom" />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation
