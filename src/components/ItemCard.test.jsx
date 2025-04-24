import { describe, test, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { ItemCard } from "./ItemCard";
import styles from "./ItemCard.module.css";

describe("Given ItemCard component", () => {
    afterEach(() => {
        cleanup();
    });

    test("When task is completed Then should display with completed status format", () => {
        // Arrange
        const completedTask = {
            uuid: "1",
            title: "Completed Task",
            description: "This is a completed task",
            status: "completed"
        };

        // Act
        const { getByText, container } = render(<ItemCard item={completedTask}/>);

        // Assert
        expect(getByText("Completed Task")).toBeDefined();
        expect(container.querySelector(`.${styles["task__status--completed"]}`)).toBeDefined();
    });

    test("When task is pending Then should display with pending status format", () => {
        // Arrange
        const pendingTask = {
            uuid: "2",
            title: "Pending Task",
            description: "This is a pending task",
            status: "pending"
        };

        // Act
        const { getByText, container } = render(<ItemCard item={pendingTask}/>);

        // Assert
        expect(getByText("Pending Task")).toBeDefined();
        expect(container.querySelector(`.${styles["task__status--pending"]}`)).toBeDefined();
    });

    test("When task is in progress Then should display with in-progress status format", () => {
        // Arrange
        const inProgressTask = {
            uuid: "3",
            title: "In Progress Task",
            description: "This is an in progress task",
            status: "in-progress"
        };

        // Act
        const { getByText, container } = render(<ItemCard item={inProgressTask}/>);

        // Assert
        expect(getByText("In Progress Task")).toBeDefined();
        expect(container.querySelector(`.${styles["task__status--progress"]}`)).toBeDefined();
    });
});
