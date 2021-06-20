import Welcome from "./component/Welcome";
// import Arrow from "./component/Arrow";
// import State from "./component/State";
// import Condition1 from "./component/Condition1";
// import Condition2 from "./component/Condition2";
// import Refresh from "./component/Refresh";
// import ReactDomManifulation from "./component/ReactDomManifulation";
// import AnotherDom from "./component/AnotherDom";
// import Form from "./component/Form";
// import AnotherForm from "./component/AnotherForm";
import OnSubmit from "./component/OnSubmit";
import Signup from "./component/Signup";

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      {/* <Welcome></Welcome>
      <Arrow />
      <State />
      <Condition1 />
      <Condition2 />
      <Refresh />
      <ReactDomManifulation />
      <AnotherDom />
      <Form />
      <AnotherForm /> */}
      <OnSubmit />
      <Signup />
    </div>
  );
}

export default App;
