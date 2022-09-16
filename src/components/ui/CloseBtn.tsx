import styles from "./CloseBtn.module.css";

type CloseBtnProps = {
    clickHandler: () => void;
}

const CloseBtn: React.FC<CloseBtnProps> = ({ clickHandler }) => {
  return (
    <button className={styles.close} onClick={clickHandler}>
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default CloseBtn;
