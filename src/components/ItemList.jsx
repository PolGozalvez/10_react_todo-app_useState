import { ItemCard } from "./ItemCard";
import styles from "./ItemList.module.css"

export const ItemList = ({ itemList }) => {
    return (
        <ul className={styles["list__wrapper"]}>
            {itemList.map((item) => {
                const { uuid } = item;

                return <ItemCard key={uuid} item={item} />;
            })}
        </ul>
    )
}
