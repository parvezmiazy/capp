import Welcome from "./component/Welcome";
import Arrow from "./component/Arrow";
import State from "./component/State";
import Condition1 from "./component/Condition1";
import Condition2 from "./component/Condition2";
import Refresh from "./component/Refresh";

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <Arrow />
      <State />
      <Condition1 />
      <Condition2 />
      <Refresh />
    </div>
  );
}

export default App;
