import styles from "./friendlist.module.css";

const Friends = ({ Names }) => {

  // const friends_list = (Names) => {
  //   console.log(`${Names} button Was clicked`);
  // }

  return (
    <>
      <ul className="list-group">
        {Names.map((item) => (
          <li key={item} className="list-group-item">
            <span>{item}</span>
            <button onClick={(Names) => console.log(`${Names} hi`)} className={`${styles.profile} btn btn-primary`}>Profile</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Friends;
