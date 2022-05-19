import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Layout from "../components/Layout";

import ResponsiveEmbed from "react-responsive-embed";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Hustle University 2.0 | Escape the Matrix</title>
          <meta
            name="description"
            content="You got 3-5 years MAX to ESCAPE THE MATRIX before you are doomed a Slave to the System ⛓ Join the 52,000 and Break Free with the Hustlers University 2.0. A community where me and dozens of War Room members will teach YOU exactly how to make money TODAY. This is a community where you will have access to Stock analysis, Options plays, Crypto analysis, DeFi, E-commerce, Copywriting, Freelancing, Flipping, Financial Planning, Affiliate Marketing, Business management, and MORE "
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Hustle University 2.0</h1>

          <p className={styles.description}>
            Join <strong>over 52,000</strong> Others Set to{" "}
            <strong>Escape the Matrix</strong>
          </p>

          <ResponsiveEmbed
            src="https://www.youtube.com/embed/hhXaenbgR2I?controls=0"
            allowFullScreen
          />

          <p
            className={styles.description}
            style={{ maxWidth: 520, margin: "1rem auto" }}
          >
            Learn Stock Analysis, Options Plays, Crypto Analysis, DeFi,
            E-commerce, Copywriting, Freelancing, Flipping, Financial planning,
            Affiliate Marketing, Business management, and MORE
          </p>

          <div className={styles.grid}>
            <a href="http://hustleu2.com" className={styles.card}>
              Get Started
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://buildleansaas.com?aff=andrew-tate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.logo}>
              Powered By{" "}
              <span style={{ paddingLeft: "0.25rem", paddingRight: "0.25rem" }}>
                <Image
                  src="/bls.png"
                  alt="Build Lean SaaS Logo"
                  width={42}
                  height={42}
                />
              </span>{" "}
              Build Lean SaaS
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  );
}
