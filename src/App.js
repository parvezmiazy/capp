import Welcome from "./component/Welcome";
import Arrow from "./component/Arrow";
import State from "./component/State";
import Condition1 from "./component/Condition1";
import Condition2 from "./component/Condition2";
import Refresh from "./component/Refresh";
import ReactDomManifulation from "./component/ReactDomManifulation";

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <Arrow />
      <State />
      <Condition1 />
      <Condition2 />
      <Refresh />
      <ReactDomManifulation/>
    </div>
  );
}

export default App;
