import styles from "./CartList.module.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import { cartContext } from "../../store/cartContext";
import { currencyFormatter } from "../../util/currencyFormatter";

export interface CartItemType {
  name: string;
  image: string;
  amount: number;
  id: number;
  quantity: number;
}

const CartList: React.FC = () => {
  const { items, total } = useContext(cartContext);

  const tax = total * 5/100;
  
  return (
    <div>
      <h1>Cart</h1>
      <div className={styles.list}>
        {items.length === 0 && <h3>No items in cart</h3>}
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {items.length !== 0 && (
        <>
          <h2 className={styles.summary}>
            Subtotal: <span>{currencyFormatter(total)}</span>
          </h2>
          <h2 className={styles.summary}>
            Tax: <span>{currencyFormatter(tax)}</span>
          </h2>
          <h2 className={styles.summary}>
            Grand total: <span>{currencyFormatter(total + tax)}</span>
          </h2>
          <button className={styles.order}>Order</button>
        </>
      )}
    </div>
  );
};

export default CartList;
