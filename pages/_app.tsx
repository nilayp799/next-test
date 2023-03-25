// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '@/components/comman/Navigation'
import '../assets/globals.css'
import Constructions from '@/components/constructions/constructions'
import { useEffect } from 'react'
import NewNav from '@/components/comman/NewNav'
import Services from '@/components/Services/Services'
import "../assets/css/main.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/fontawesome-free/css/all.min.css"
import "../assets/vendor/aos/aos.css"
import "../assets/vendor/aos/aos.css"
import "../assets/vendor/glightbox/css/glightbox.min.css"
import "../assets/vendor/swiper/swiper-bundle.min.css"
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
   
    {/* <Navigation/> */}
    {/* <NewNav/> */}
    <Component {...pageProps} />
    
    </>
  )
}
