import Link from "next/link";
import Logo from "./logo";
import styles from "./main-navigation.module.css";
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
          </li>
          <li>
            <Link href={"/Contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/auth"}>Login</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
