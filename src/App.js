import Sidebar from "./containers/Sidebar";
import Configurations from "./containers/Configurations";
import { Switch, Route } from "react-router-dom";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Switch>
        <Route path="/configurations">
          <Configurations />
        </Route>
        <Route path="/">
          <div>to replace</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App