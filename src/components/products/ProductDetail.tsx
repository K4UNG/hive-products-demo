import styles from "./ProductDetail.module.css";
import { useLocation } from "react-router-dom";
import { ProductItemProps } from "./ProductItem";
import { currencyFormatter } from "../../util/currencyFormatter";
import BackBtn from "../ui/BackBtn";
import { useState, useContext } from "react";
import { cartContext } from "../../store/cartContext";

const ProductDetail: React.FC = () => {
  const { name, image, description, amount, category, id } = useLocation()
    .state as ProductItemProps;
  const [number, setNumber] = useState(1);
  const { addItem } = useContext(cartContext);

  function addHandler() {
    if (number === 99) return;
    setNumber((prev) => prev + 1);
  }

  function removeHandler() {
    if (number === 1) return;
    setNumber((prev) => prev - 1);
  }

  function addToCart() {
    addItem(
      {
        id,
        name,
        image,
        amount,
        quantity: number,
      },
      number
    );
  }

  return (
    <div className={styles.wrapper}>
      <BackBtn />
      <div className={styles.grid}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.content}>
          <div className={styles.cat}>{category}</div>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.price}>{currencyFormatter(amount)}</div>
          <div className={styles.buttons}>
            <button onClick={removeHandler}>-</button>
            <div>{number}</div>
            <button onClick={addHandler}>+</button>
          </div>
          <button onClick={addToCart} className={styles.cart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
