import styles from './header.module.scss'
import { navItems } from '../../fixtures/header.fixtures'
import Link from 'next/link'

const HeaderLogo = () => {
  return (
    <div className={styles["header-title-container"]}>
      <h1 className={styles["header-title"]}>
        Ciudades.dev
      </h1>
    </div>
  );
}

const NavItems = () => {
  return (
    <nav className={styles["header-nav-container"]}>
      <menu className={styles["header-nav-menu"]}>
        {navItems.map((navItem, index) => (
          <span key={index} className={styles["menu-items"]}>
            <Link href="/">
              {navItem.item}
            </Link>
          </span>
        ))}
      </menu>
    </nav>
  );
}

const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["container"]}>
        <HeaderLogo />
        <NavItems />
      </div>
    </header>
  );
}
 
export default Header;