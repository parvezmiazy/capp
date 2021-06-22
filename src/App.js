import Welcome from "./component/Welcome";
import './App.css';
import styles from './Mycss.module.css';
// import Arrow from "./component/Arrow";
// import State from "./component/State";
// import Condition1 from "./component/Condition1";
// import Condition2 from "./component/Condition2";
// import Refresh from "./component/Refresh";
// import ReactDomManifulation from "./component/ReactDomManifulation";
// import AnotherDom from "./component/AnotherDom";
// import Form from "./component/Form";
// import AnotherForm from "./component/AnotherForm";
//import OnSubmit from "./component/OnSubmit";
//import Signup from "./component/Signup";
//import SignUpValidation from "./component/SignUpValidation";
//import Text from "./component/Text";
//import Select from "./component/Select";
//import List from "./component/List";
//import Jsonlist from "./component/Jsonlist";
import Example from "./component/Example";
function App() {
  return (
    <div className="App">
 <Example></Example>
      <Welcome></Welcome>
      <p className="TextStyle">Home External Css included</p>
      <h1 className={styles.TextStyle}>External Css module included</h1>
      {/* <Welcome></Welcome>
      <Arrow />
      <State />
      <Condition1 />
      <Condition2 />
      <Refresh />
      <ReactDomManifulation />
      <AnotherDom />
      <Form />
      <AnotherForm /> 
      <OnSubmit />
      <Signup />*
      <SignUpValidation />
      <Text /> 
      <Select />
      <List />
      <Jsonlist />*/}
    </div>
  );
}

export default App;
