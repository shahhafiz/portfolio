import Header from '../components/header'
import Home from './home/home'
import About from './about/about'
import Work from './work/work'

export default function Portfolio() {
  return (
    <>
      <Header/>
      <div class="container mx-auto">
        <Home/>
        <About/>
        <Work/>
        {/* <About/> */}
      </div>
    </>
  )
}
