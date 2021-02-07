import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Logo />
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink to="/" alt="" activeClassName='active'>
            Podcasts
          </NavLink>
        </li>
        <li>
          <NavLink to="/configurations" alt="" exact={true} activeClassName={styles.active}>
            Configurations
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
