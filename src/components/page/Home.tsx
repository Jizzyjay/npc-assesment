import Astro from '../molecules/Astro'
import About from '../molecules/About'
import Gallery from './Gallery'

const Home = () => {
  return (
    <div>
        <About />
        <Astro />
        <Gallery />
    </div>
  )
}

export default Home