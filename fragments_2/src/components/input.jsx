import Styles from "./input.module.css";

const Input = () => {
  return (
    <>
      <div className={Styles.align}>
        <input type="text" className={Styles.Input}/>
        <button className={`${Styles.button} btn btn-success`}>Add</button>
      </div>
    </>
  );
};

export default Input;
