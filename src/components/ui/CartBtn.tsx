import { NavLink } from "react-router-dom";
import styles from './CartBtn.module.css';
import { useContext } from "react";
import { cartContext } from "../../store/cartContext";

const CartBtn: React.FC = () => {
  const { quantity } = useContext(cartContext);
  return (
    <NavLink to="cart" className={styles.cart}>
        {quantity !== 0 && <div className={styles.quantity} >{quantity}</div>}
      <svg
        width="38"
        height="39"
        viewBox="0 0 38 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.72095 11.7794H29.0143C29.4458 11.7794 29.8725 11.8699 30.2668 12.0449C30.6612 12.2199 31.0145 12.4756 31.304 12.7955C31.5935 13.1154 31.8128 13.4924 31.9477 13.9022C32.0825 14.3121 32.1301 14.7456 32.0871 15.1749L31.1607 24.4396C31.0845 25.2017 30.7278 25.9082 30.16 26.4221C29.5922 26.936 28.8537 27.2206 28.0879 27.2206H13.3415C12.6273 27.2209 11.9351 26.9736 11.3827 26.5209C10.8304 26.0682 10.452 25.438 10.312 24.7377L7.72095 11.7794Z"
          stroke="white"
          strokeWidth="3.08824"
          strokeLinejoin="round"
        />
        <path
          d="M7.72073 11.7794L6.47 6.77183C6.38635 6.43792 6.19353 6.14154 5.92216 5.92976C5.65079 5.71798 5.31643 5.60294 4.9722 5.60294H3.08838M12.3531 33.3971H15.4413M24.706 33.3971H27.7943"
          stroke="white"
          strokeWidth="3.08824"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </NavLink>
  );
};

export default CartBtn;
