import styles from "./ProductItem.module.css";
import { NavLink } from "react-router-dom";
import { currencyFormatter } from '../../util/currencyFormatter'

export interface ProductItemProps {
  name: string;
  amount: number;
  description: string;
  id: number;
  image: string;
  category: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  amount,
  image,
  description,
  id,
  category
}) => {
  return (
    <div className={styles.product}>
      <div className={styles.head}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.price}>{currencyFormatter(amount)}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.text}>
          <p className={styles.description}>
            {description.length < 70
              ? description
              : description.slice(0, 70) + "...."}
          </p>
          <NavLink
            to={`/products/${id}`}
            state={{ name, description, amount, image, category, id }}
            className={styles.button}
          >
            View Product
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
