import Item from "./item";
import styles from "./list.module.css";

function List({ food }) {
  // let itemsclicked = (event) => {
  //   console.log(event);
  //   alert(`${food} add Button clicked`);
  // };

  if (food == "") {
    return <h2 className={`${styles["heading"]}`}>I Am Hungry.</h2>;
  } else {
    return (
      <>
        <ul className="list-group">
          {food.map((item) => (
            <Item
              key={item}
              food={item}
              itemsclicked={() => console.log(`${item}`)}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default List;
