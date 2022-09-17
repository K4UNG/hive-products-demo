import styles from "./ProductDetail.module.css";
import { useLocation } from "react-router-dom";
import { ProductItemProps } from "./ProductItem";
import { currencyFormatter } from '../../util/currencyFormatter'
import BackBtn from "../ui/BackBtn";

const ProductDetail: React.FC = () => {
  const { name, image, description, amount, category } = useLocation().state as ProductItemProps;

  return (
    <div className={styles.wrapper}>
      <BackBtn />
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.cat}>{category}</div>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.price}>{currencyFormatter(amount)}</div>
      <div className={styles.buttons}>
        <button>-</button>
        <div>1</div>
        <button>+</button>
      </div>
      <button className={styles.cart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
