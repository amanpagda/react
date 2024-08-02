let CurrentDate = () => {
  let time = new Date();

  return (
    <p className="text-2 lead">
      This Is The Current Time : {time.toLocaleDateString()}
      {" - "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentDate;
