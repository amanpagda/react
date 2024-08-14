import styles from "./container.module.css";

const Container = (props) => {
  return <center><div className={styles.Container}>{props.children}</div></center>
}

export default Container;