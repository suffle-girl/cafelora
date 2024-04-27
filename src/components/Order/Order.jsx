import { OrderItem } from "../OrderItem/OrderItem";

export const Order = ({ items }) => (
  <main className="order">
    <div className="order__content container">
      <h1>Vaše objedávnka</h1>
      <p className="empty-order empty-order--hide">
        Zatím nemáte nic objednáno
      </p>
      <div className="order__items">
        {items.map((item) => (
          <OrderItem  key={item.id} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  </main>
);
