import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import styles from "./Sidebar.module.css";
import {useI18nState} from "../contexts/i18nContext";

function Sidebar() {
  const lang = useI18nState();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Logo />
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink to="/" alt="" activeClassName={styles.active} exact={true} >
            {lang['menu.podcasts']}
          </NavLink>
        </li>
        <li>
          <NavLink to="/configurations" alt="" exact={true} activeClassName={styles.active}>
          {lang['menu.configurations']}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
