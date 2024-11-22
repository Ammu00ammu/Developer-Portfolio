import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Features from './components/Features/Features'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FooterBottom from './components/Footer/FooterBottom';
import whatsappLogo from './assets/whatsapp.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" w-[100%] h-auto bg-bodyColor text-lightText px-4 ">
        <Navbar/>
        <div className='max-w-screen-2xl mx-auto px-16'>
        <Banner/>
        <Features/>
        <Projects/>
        <Resume/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
        </div>
      </div>
      <div className='fixed bottom-10 right-2 p-3 z-10'>
        <a href="https://wa.me/919993682118?text=Hello How Can I help you ?" target='_blank'>
          <img className=' w-16 h-16 rounded-full hover:scale-110 transition-transform duration-300' src={whatsappLogo} alt="" />
        </a>
      </div>
    </>
  )
}

export default App
