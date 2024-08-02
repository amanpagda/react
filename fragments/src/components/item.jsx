import styles from "./list.module.css";

const Item = (props) => {
  return (
    <>
      <li className={`${styles["text"]} list-group-item`}>{props.food}</li>
    </>
  );
};

export default Item;
