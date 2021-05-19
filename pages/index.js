import Head from "next/head";
import Image from "next/image";
import {
  QueryClientProvider,
  QueryClient,
  useInfiniteQuery,
} from "react-query";

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
          <Posts />
        </main>
      </div>
    </QueryClientProvider>
  );
}

async function fetchPosts({ pageParam = 1 }) {
  const res = await fetch(`/api/posts?page=${pageParam}`);
  return await res.json();
}

function Posts() {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery("posts", fetchPosts, {
    getNextPageParam: (lastPage) => lastPage.info.next,
  });

  return (
    <>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error, can't fetch posts</p>
      ) : (
        <>
          {data.pages.map((group, i) => (
            <div styles={{ width: "100%" }} key={i}>
              {group.results.map((post, j) => (
                <div key={j} className={styles.card}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          ))}
          <div>
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
            </button>
          </div>
          <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
        </>
      )}
    </>
  );
}
