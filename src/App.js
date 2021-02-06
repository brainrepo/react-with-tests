import "./App.css";
import Sidebar from "./containers/Sidebar";
import Configurations from "./containers/Configurations";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route path="/configurations">
          <Configurations />
        </Route>
        <Route path="/">
          <div>to replace</div>
        </Route>
      </Switch>
    </>
  );
}

export default App