import styles from "./ListContainer.module.css";

export const ListContainer = ({ children }) => {
    return <main className={styles["list__wrapper"]}>{children}</main>
};
