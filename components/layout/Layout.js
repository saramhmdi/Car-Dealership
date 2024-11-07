import Link from "next/link";
import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car Dealership</h2>
          <p>choose and buy uou car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Car Dealership project next course &copy;
      </footer>
    </>
  );
}

export default Layout;
