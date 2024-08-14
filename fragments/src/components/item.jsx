import styles from "./list.module.css";

const Item = ({ food, itemsclicked }) => {
  return (
    <>
      <li className={`${styles["text"]} list-group-item`}>
        <span>{food}</span>
        <button
          onClick={itemsclicked}
          className={`${styles.button} btn btn-primary`}
        >
          add
        </button>
      </li>
    </>
  );
};

export default Item;
