import Header from '../components/header'
import Home from '../components/home'
import About from '../components/about'
export default function Portfolio() {
  return (
    <>
      <Header/>
      <div class="max-w-6xl mx-auto">
        <Home/>
        <About/>
      </div>
    </>
  )
}
