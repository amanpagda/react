import "./App.css";
import Heading from "./components/heading";
import Text from "./components/text";
import CurrentDate from "./components/date";

function App() {
  return (
    <div className="container">
      <center>
        <Heading />
        <Text />
        <CurrentDate />
      </center>
    </div>
  );
}

export default App;
