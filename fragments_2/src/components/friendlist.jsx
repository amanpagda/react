import styles from "./friendlist.module.css";

const Friends = ({ Names }) => {

  const change = (Names) => {
    console.log(`${Names} clicked`);
  };

  return (
    <>
      <ul className="list-group">
        {Names.map((item) => (
          <li key={item} className="list-group-item">
            <span>{item}</span>
            <button onClick={change(Names)} className={`${styles.profile} btn btn-primary`}>Profile</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Friends;
