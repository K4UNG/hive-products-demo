import styles from "./Modal.module.css";
import { NavLink } from "react-router-dom";

const Modal: React.FC<{closeModal: () => void}> = ({ closeModal }) => {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <svg
        className={styles.tick}
          viewBox="0 0 139 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M123.799 76.016C119.455 97.7348 103.079 118.185 80.1005 122.755C68.8936 124.987 57.2682 123.626 46.8796 118.866C36.491 114.107 27.8689 106.191 22.2409 96.2456C16.6129 86.3006 14.266 74.8336 15.5343 63.4771C16.8026 52.1207 21.6214 41.4539 29.3047 32.9955C45.0639 15.6379 71.6737 10.8598 93.3924 19.5473"
            stroke="#1AB4E4"
            strokeWidth="13.0312"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M49.9531 67.3281L71.6719 89.0468L123.797 32.5781"
            stroke="#1AB4E4"
            strokeWidth="13.0312"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1>Order successful!!</h1>
        <div>Thanks for shopping with Hive.</div>
        <NavLink className={styles.button} to="/products">
          Go back home
        </NavLink>
      </div>
    </div>
  );
};

export default Modal;
