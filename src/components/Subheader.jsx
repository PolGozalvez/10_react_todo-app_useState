import styles from "./HeaderWrapper.module.css";

export const Subheader = ({ subtitle}) => {
    return <h2 className={styles["header__wrapper"]}>{subtitle}</h2>;
};
