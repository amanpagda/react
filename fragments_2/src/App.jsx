import "./App.css";
import Friends from "./components/friendlist";
import Input from "./components/input";
import Container from "./components/container";

function App() {

  let Names = ["Aman", "Ruchit", "Smit", "Rahul", "Bhuro"];

  return (
    <>
      <Container>
        <h2>Friends List.</h2>
        <Input></Input>
        <Friends Names={Names}></Friends>
      </Container>
    </>
  );
}

export default App;
