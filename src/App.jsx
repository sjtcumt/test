import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import Main from "./components/Main";

import { useRoutes } from "react-router-dom";

import routers from "./routers";

export default function App() {
  const element = useRoutes(routers);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.main_left}>
          <Main></Main>
        </div>
        <div className={styles.main_right}>{element}</div>
      </div>
      <Footer />
    </div>
  );
}
