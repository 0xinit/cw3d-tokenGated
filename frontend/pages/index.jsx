import styles from "../styles/Home.module.css";
import TokenGated from "../components/TokenGated";

export default function Home() {
  return (
    <div>
      {/* <main className={styles.main}> */}
      <main>
        {/* <TokenGated></TokenGated> */}
        {/* <TestTokenGated /> */}
        <TokenGated />
      </main>
    </div>
  );
}
