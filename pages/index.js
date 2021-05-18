import Head from "next/head";
import Image from "next/image";
import { QueryClientProvider, QueryClient } from "react-query";

import styles from "../styles/Home.module.css";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <Head>
          <title>Infinite Scroll</title>
          <meta name="description" content="Infinite Scroll with react query" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Infinite Scroll</h1>
        </main>
      </div>
    </QueryClientProvider>
  );
}
