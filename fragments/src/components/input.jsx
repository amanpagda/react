import styles from "./input.module.css";

function Input({ handleonChange }) {
  return (
    <input type="text" onChange={handleonChange} className={styles.Input} />
  );
}

export default Input;
