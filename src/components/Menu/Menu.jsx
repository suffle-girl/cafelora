import { Drink } from "../Drink/Drink"
import "./Menu.css"

export const Menu = ({drinks}) => (
    <section id="menu" className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
            {drinks.map((item)=>{
              return(
                <Drink key={item.id} id={item.id} ordered={item.ordered} layers={item.layers} image={`http://localhost:4000${item.image}`} name={item.name} />
              )
            })}
    
          </div>
          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>
)
