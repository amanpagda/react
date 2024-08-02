function Todoitem2() {
  let name = "Go To College";
  let date = "4/10/2023";

  return (
    <div class="container">
      <div class="row mt-5 fw-bold">
        <div class="col-6">{name}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem2;
