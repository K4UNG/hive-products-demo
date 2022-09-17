import styles from "./CartItem.module.css";
import { CartItemType } from "./CartList";
import { currencyFormatter } from "../../util/currencyFormatter";
import RemoveBtn from '../ui/RemoveBtn';

type CartItemProps = {
  item: CartItemType;
};

function removeItem(id: number) {
    console.log(id)
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { name, image, amount, quantity } = item;
  return (
    <div className={styles.item}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.quantity}>
          <button>-</button>
          <div>
            {currencyFormatter(amount)} x {quantity}
          </div>
          <button>+</button>
        </div>
        <div className={styles.total}>
          {currencyFormatter(amount * quantity)}
        </div>
      </div>
      <RemoveBtn clickHandler={() => removeItem(12)} />
    </div>
  );
};

export default CartItem;
