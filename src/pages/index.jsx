import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Header } from '../components/Header/Header';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

const response = await fetch("http://localhost:4000/api/drinks")
const data = await response.json()
const drink = data.data
console.log(drink)

const toggleMenu = () => {
  document.querySelector(".rollout-nav").classList.toggle("nav-closed")
}

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

document.querySelector(".nav-btn").addEventListener("click", toggleMenu)

document.querySelector(".rollout-nav").addEventListener("click", toggleMenu)
