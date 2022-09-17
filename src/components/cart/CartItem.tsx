import styles from "./CartItem.module.css";
import { CartItemType } from "./CartList";
import { currencyFormatter } from "../../util/currencyFormatter";
import RemoveBtn from "../ui/RemoveBtn";
import { useContext } from "react";
import { cartContext } from "../../store/cartContext";

type CartItemProps = {
  item: CartItemType;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { name, image, amount, quantity, id } = item;
  const { removeItem, decreaseItem, increaseItem } = useContext(cartContext);

  function decreaseHandler() {
    decreaseItem(id);
  }

  function increaseHandler() {
    increaseItem(id);
  }

  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.quantity}>
          <button onClick={decreaseHandler}>-</button>
          <div>
            {currencyFormatter(amount)} x {quantity}
          </div>
          <button onClick={increaseHandler}>+</button>
        </div>
        <div className={styles.total}>
          {currencyFormatter(amount * quantity)}
        </div>
      </div>
      <RemoveBtn clickHandler={() => removeItem(id)} />
    </div>
  );
};

export default CartItem;
