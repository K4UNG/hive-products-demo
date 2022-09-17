import styles from "./RemoveBtn.module.css";

const RemoveBtn: React.FC<{ clickHandler: () => void }> = ({
  clickHandler,
}) => {
  return (
    <button className={styles.button} onClick={clickHandler}>
      <svg
        width="20"
        height="23"
        viewBox="0 0 20 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_7_672)">
          <path
            d="M6.03571 0.790179L5.71429 1.42857H1.42857C0.638393 1.42857 0 2.06696 0 2.85714C0 3.64732 0.638393 4.28571 1.42857 4.28571H18.5714C19.3616 4.28571 20 3.64732 20 2.85714C20 2.06696 19.3616 1.42857 18.5714 1.42857H14.2857L13.9643 0.790179C13.7232 0.303571 13.2277 0 12.6875 0H7.3125C6.77232 0 6.27679 0.303571 6.03571 0.790179ZM18.5714 5.71429H1.42857L2.375 20.8482C2.44643 21.9777 3.38393 22.8571 4.51339 22.8571H15.4866C16.6161 22.8571 17.5536 21.9777 17.625 20.8482L18.5714 5.71429Z"
            fill="#838383"
          />
        </g>
        <defs>
          <clipPath id="clip0_7_672">
            <rect width="20" height="22.8571" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default RemoveBtn;
