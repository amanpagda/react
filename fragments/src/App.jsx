import React from "react";
import "./App.css";
import List from "./components/list";
import Container from "./components/container";
import Input from "./components/input";

function App() {
  let food = ["dal", "chaval", "milk", "cheese", "roti"];

  let handleonChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Container>
      <h2>Healthy Food</h2>
      <Input handleonChange={handleonChange} />
      <List food={food}></List>
    </Container>
  );
}

export default App;
