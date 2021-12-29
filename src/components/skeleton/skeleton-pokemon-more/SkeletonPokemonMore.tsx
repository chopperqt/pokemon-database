import React from "react";

import styles from "./SkeletonPokemonMore.module.css";

const SkeletonPokemonMore = () => (
    <>
        <div className={styles.wrap}>
            <div className={styles.active}></div>
        </div>
        <div className={styles.wrap}>
            <div className={styles.active}></div>
        </div>
        <div className={styles.wrap}>
            <div className={styles.active}></div>
        </div>
        <div className={styles.wrap}>
            <div className={styles.active}></div>
        </div>
        <div className={styles.wrap}>
            <div className={styles.active}></div>
        </div>
    </>
);

export default SkeletonPokemonMore;