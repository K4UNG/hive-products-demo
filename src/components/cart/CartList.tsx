import styles from "./CartList.module.css";
import CartItem from "./CartItem";

export interface CartItemType {
  name: string;
  image: string;
  amount: number;
  id: number;
  quantity: number;
}

const items: CartItemType[] = [
  {
    name: "Keyboardadfasdfa",
    amount: 100,
    image:
      "https://beehive-images.hivestage.com/medium/HqWhpLyIaFjYx3oloSF4tjtxJDRGekmc1FXeqQ2P.jpg",
    id: 1722,
    quantity: 2,
  },

  {
    name: "Keyboard",
    amount: 100,
    image:
      "https://beehive-images.hivestage.com/medium/HqWhpLyIaFjYx3oloSF4tjtxJDRGekmc1FXeqQ2P.jpg",
    id: 1712,
    quantity: 5,
  },
];

const CartList: React.FC = () => {
  return (
    <div>
      <h1>Cart</h1>
      <div className={styles.list}>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <h2 className={styles.summary}>
        Subtotal: <span>$900.00</span>
      </h2>
      <h2 className={styles.summary}>
        Tax: <span>$900.00</span>
      </h2>
      <h2 className={styles.summary}>
        Grand total: <span>$900.00</span>
      </h2>

      <button className={styles.order}>Order</button>
    </div>
  );
};

export default CartList;
