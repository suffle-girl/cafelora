import { OrderItem } from "../OrderItem/OrderItem";

export const Order = ({ items }) => {
    console.log(items)
return (
  <main className="order">
    <div className="order__content container">
      <h1>Vaše objedávnka</h1>
      {  items.length !== 0 ? (
        <div className="order__items">
          {items.map((item) => (
            <OrderItem key={item.id} name={item.name} image={item.image} />
          ))}
        </div>
      ) : (
        <p className="empty-order ">
          Zatím nemáte nic objednáno
        </p>
      )}
    </div>
  </main>
)}
