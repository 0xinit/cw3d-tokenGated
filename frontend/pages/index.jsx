import styles from "../styles/Home.module.css";
import TokenGated from "../components/TokenGated";
import TestTokenGated from "../components/TestTokenGated";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        {/* <TokenGated></TokenGated> */}
        <TestTokenGated />

      </main>
    </div>
  );
}
