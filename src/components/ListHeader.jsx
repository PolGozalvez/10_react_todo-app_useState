import styles from "./HeaderWrapper.module.css";

export const ListHeader = ({ content}) => {
    return <h3 className={styles["header__wrapper"]}>{content}</h3>;
};
