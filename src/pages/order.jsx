import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css'; 
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Order } from '../components/Order/Order';

const response = await fetch("http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image");
const data = await response.json();
const drinkList = data.data;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header />
      <Order items={drinkList} />
      <Footer />
    </div>
  </div>
);
