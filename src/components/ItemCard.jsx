import styles from "./ItemCard.module.css";

export const ItemCard = ({ item }) => {
    const { title, description, status } = item;
    
    const ClassStatus =
        status === "completed" 
        ? styles["task__status--completed"]
        : status === "in progress" 
        ? styles["task__status--progress"]
        : styles["task__status--pending"];

    return (
        <li className={styles.task}>
            <h4>{title}</h4>
            <p className={styles.task__description}>{description}</p>
            <span className={ClassStatus}>{status}</span>
        </li>
    )
};
