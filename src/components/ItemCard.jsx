import styles from "./ItemCard.module.css";

export const ItemCard = ({ item }) => {
    const { title, description, status } = item;

    const STATUS_STYLES = {
        pending: styles["task__status--pending"],
        "in-progress": styles["task__status--progress"],
        completed: styles["task__status--completed"]
    };
    
    return (
        <li className={styles.task}>
            <h4>{title}</h4>
            <p className={styles.task__description}>{description}</p>
            <span className={STATUS_STYLES[status]}>{status}</span>
        </li>
    );
};
