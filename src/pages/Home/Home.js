import React from 'react'
import Navigation from '../../components/global/Navigation'
import MainHomePage from '../../components/Home/MainHomePage'
import Horizontal from "../../components/Home/Horizontal";

const Home = () => {
  return (
      <>
          <Navigation />
          <MainHomePage />
          <Horizontal />
    </>
  )
}

export default Home