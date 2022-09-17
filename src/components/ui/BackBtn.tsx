import styles from "./BackBtn.module.css";
import { useNavigate } from "react-router-dom";

const BackBtn: React.FC = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate(-1);
  }
  return (
    <button className={styles.button} onClick={clickHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
      back
    </button>
  );
};

export default BackBtn;
