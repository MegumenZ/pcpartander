import { useCart } from "../context/CartContext";

const Keranjang = () => {
  const { cartItems } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Keranjang Belanja</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang masih kosong.</p>
      ) : (
        <ul>
          {cartItems.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "10px" }}>
              <img
                src={item.image}
                alt={item.title}
                width="50"
                style={{ verticalAlign: "middle", marginRight: "10px" }}
              />
              {item.title} - Rp {Math.round(item.price * 15000)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Keranjang;
