import { Outlet, NavLink } from 'react-router-dom';

import styles from './menu.module.css';

const currentActiveMenu = ({ isActive }) =>
  isActive
    ? styles.menu__active + ' ' + styles.menu__style
    : styles.menu__style;

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <NavLink className={currentActiveMenu} to='/'>
          Main Page
        </NavLink>
        <NavLink className={currentActiveMenu} to='/sender'>
          Send to Server
        </NavLink>
        <NavLink className={currentActiveMenu} to='/receiver'>
          Receive from Server
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
