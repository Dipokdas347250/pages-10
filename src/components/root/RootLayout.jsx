import React from 'react'
import Menu from '../menu/Menu'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const RootLayout = () => {
  return (
    <>
    <Menu/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout
