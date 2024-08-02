import styles from "./container.module.css";

function Container(props) {
  return <center><div className={styles.Container}>{props.children}</div></center>;
}

export default Container;
