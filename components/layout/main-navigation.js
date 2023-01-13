import Link from "next/link";
import Logo from "./logo";
import styles from './main-navigation.module.css'
function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/posts"}>posts</Link>
            <Link href={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
