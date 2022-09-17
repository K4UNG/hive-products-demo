import styles from "./CartList.module.css";
import CartItem from "./CartItem";
import { useContext, useState } from "react";
import { cartContext } from "../../store/cartContext";
import { currencyFormatter } from "../../util/currencyFormatter";
import BackBtn from "../ui/BackBtn";
import { createPortal } from "react-dom";
import Modal from "../ui/Modal";

export interface CartItemType {
  name: string;
  image: string;
  amount: number;
  id: number;
  quantity: number;
}

const CartList: React.FC = () => {
  const { items, total, clearCart } = useContext(cartContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const tax = (total * 5) / 100;

  function orderHandler() {
    setLoading(true);
    setError(null);
    fetch("https://assessment-api.hivestage.com/api/orders", {
      method: "POST",
      body: JSON.stringify({
        orderEntries: items.map((item) => ({
          productId: item.id,
          productName: item.name,
          amount: item.amount,
          quantity: item.quantity,
          lineTotal: 0,
        })),
        subTotal: total,
        tax: tax,
        total: total + tax,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setSuccess(true);
        clearCart();
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <div className={styles.wrapper}>
      {success &&
        createPortal(
          <Modal closeModal={() => setSuccess(false)} />,
          document.getElementById("modal")!
        )}
      <BackBtn />
      <h1 className={styles.title}>Cart</h1>
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
            Grand Total: <span>{currencyFormatter(total + tax)}</span>
          </h2>
          {error && <div className={styles.error}>{error}</div>}
          <button
            onClick={orderHandler}
            className={`${styles.order} ${loading && styles.loading}`}
          >
            Order
          </button>
        </>
      )}
    </div>
  );
};

export default CartList;
