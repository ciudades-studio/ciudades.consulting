import styles from './header.module.scss'

const navItems = [
  { item: "Services" },
  { item: "Industries" },
  { item: "About Us" },
  { item: "Contact" }
];

const HeaderLogo = () => {
  return(
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
        {navItems.map(navItem => (
          <span className={styles["menu-items"]}>
            <a href="/">
              {navItem.item}
            </a>
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