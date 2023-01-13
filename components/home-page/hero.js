import styles from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/bo.jpg"
          alt={"bebo"}
          width={300}
          height={300}
        />
      </div>
      <h1> Hi, I am Vi</h1>
      <p>Hi vi</p>
    </section>
  );
}
export default Hero;
