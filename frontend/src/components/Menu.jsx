import { Outlet, NavLink } from 'react-router-dom';

import styles from './menu.module.css';

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <NavLink to='/'>Main Page</NavLink>
        <NavLink to='/sender'>Send to Server</NavLink>
        <NavLink to='/receiver'>Receive from Server</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
