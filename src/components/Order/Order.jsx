export const Order = ({ items }) => (
  <main className="order">
    <div className="order__content container">
      <h1>Vaše objedávnka</h1>
      <p className="empty-order empty-order--hide">
        Zatím nemáte nic objednáno
      </p>
      <div className="order__items">
        {items.map((item) => (
          <div key={item.id} className="order-item">
            <img src={`http://localhost:4000${item.image}`} className="order-item__image" />
            <div className="order-item__name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  </main>
);
