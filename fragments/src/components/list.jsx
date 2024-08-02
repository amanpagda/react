import Item from "./item";
import styles from "./list.module.css";

function List() {
  let food = ["dal", "chaval", "milk", "aman", "pagda"];

  if (food == "") {
    return <h2 className={`${styles["heading"]}`}>I Am Hungry.</h2>;
  }
  return (
    <>
      <ul className="list-group">
        {food.map((item) => (
          <Item key={item} food={item} />
        ))}
      </ul>
    </>
  );
}

export default List;
