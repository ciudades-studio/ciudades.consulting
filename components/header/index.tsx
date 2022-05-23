import styles from './header.module.scss'
import { navItems } from '../../fixtures/header.fixtures'
import Link from 'next/link'
import Image from 'next/image';

const HeaderLogo = () => {
  return (
    <div className={styles["header-title-container"]}>
      <Image
        alt='ciudades.consulting logo'
        src="https://images.ctfassets.net/s7ek0w6gx35k/W2Rdd5YjHW4qTpwifNqx8/d009b2a26fbd08c84301061d5758cd8e/Logo_Ciudades.png?w=232&h=86"
        width={232}
        height={86}
      />
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
      <HeaderLogo />
      <div className={styles["container"]}>
        <NavItems />
      </div>
    </header>
  );
}
 
export default Header;
