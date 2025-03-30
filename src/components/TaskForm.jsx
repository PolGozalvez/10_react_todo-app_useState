import styles from './TaskForm.module.css'

export const TaskForm = ({ addTask }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);

        const title = formData.get("title")
        const description = formData.get("description")
        const status = formData.get("status");

        const newTodo = {
            uuid: crypto.randomUUID(),
            title,
            description,
            status
        };

        addTask(newTodo);
        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form__group}>
            <div>
                <input type="text" name="title" placeholder="Title" required />
                <textarea name="description" placeholder="Description" required />
                <select name="status" defaultValue="pending">
                    <option value="pending">Pendiente</option>
                    <option value="in-progress">En Progreso</option>
                    <option value="completed">Completado</option>
                </select>
                <button type="submit">Agregar Tarea</button>
            </div>
        </form>
    );
};
