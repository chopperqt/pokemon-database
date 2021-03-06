import React from "react";

import styles from "./SkeletonPokemonMore.module.scss";

const SkeletonPokemonMore = () => (
    <div className={styles.layout}>
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
    </div>
);

export default SkeletonPokemonMore;
