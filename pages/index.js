import Header from '../components/header'
import Home from './home/home'
import About from './about/about'
import Work from './work/work'
import Contact from './contact/contact'

import smoothscroll from 'smoothscroll-polyfill'

export default function Portfolio() {
  return (
    <>
      <Header/>
      <div className="container mx-auto px-4">
        <Home/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    </>
  )
}
