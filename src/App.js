import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Enquire from './Components/Enqiure/Enquire'

const App = () => {
  return (
    <>

      <Header />

      <div className="SectionBanner">
        <Section image='https://www.dlf.in/homes/premium/gardencityenclave/media/images//Garden-city-plots-logo.png' date='11.04.2022' GGM='550/282/2022/25' />
        <Section image='https://www.dlf.in/homes/premium/gardencityenclave/media/images/dlf-gardencity-logo-dark.png' date='17.08.2022' GGM='603/335/2022/78' />
        <Section image='https://www.dlf.in/homes/premium/gardencityenclave/media/images//garderncity-phase-2-logo.png' date='02.01.2023' GGM='657/389/2023/01' />
      </div>
      <Main/>
      <Footer/>
      <Enquire/>
 





    </>



  )
}

export default App

