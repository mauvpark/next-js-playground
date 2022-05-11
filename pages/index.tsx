import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { navigateHandler } from "../lib/click-handler";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<Head>
				<title>Next Js Playground</title>
				<meta name="description" content="Next js playground" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Next Js Playground</h1>

				<div className={styles.grid}>
					<a
						className={styles.card}
						onClick={() => navigateHandler(router, "/ssr")}
					>
						<h2>SSR Test &rarr;</h2>
						<p>SSR Test with hook.</p>
					</a>

					{/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Home;
