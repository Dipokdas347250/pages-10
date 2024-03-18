import React from 'react'
import Menu from '../components/menu/Menu'
import Banner from '../components/banner/Banner'
import Work from '../components/work/Work'
import Our from '../components/our/Our'
import Hearder from '../components/hearder/Hearder'
import Content from '../components/content/Content'
import Faq from '../components/faq/Faq'
import Blog from '../components/blog/Blog'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
    {/* <Menu/> */}
    <Banner/>
    <Work/>
    <Our/>
    <Hearder/>
    <Content/>
    <Faq/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default Home
