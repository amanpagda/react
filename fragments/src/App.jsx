import React, { useState } from "react";
import "./App.css";
import List from "./components/list";
import Container from "./components/container";
import Input from "./components/input";

function App() {
  let food = ["dal", "chaval", "milk", "cheese", "roti"];

  let [textToShow, setTextState] = useState("Food Entered By Users");
  // let textToShow = text[0];
  // let setTextState = text[1];

  let handleonChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <Container>
      <h2>Healthy Food</h2>
      <Input handleonChange={handleonChange} />
      <p>{textToShow}</p>
      <List food={food}></List>
    </Container>
  );
}

export default App;
