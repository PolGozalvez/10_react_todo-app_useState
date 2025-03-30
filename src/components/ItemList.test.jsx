import { describe, test, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { ItemList } from "./ItemList";

describe("Given ItemList component", () => {
    afterEach(() => {
        cleanup();
    });
  
    test("When receiving a list of tasks Then should render all tasks correctly", () => {
        // Arrange
        const itemList = [
            {
                uuid: "1",
                title: "Task A",
                description: "Description for Task A",
                status: "completed"
            },
            {
                uuid: "2",
                title: "Task B",
                description: "Description for Task B",
                status: "pending"
            }
        ];

        // Act
        const { getByRole } = render(<ItemList itemList={itemList}/>);
        const list = getByRole("list");

        // Assert
        expect(list.tagName).toBe("UL");
        expect(list.children.length).toBe(2);
        expect(list.firstElementChild.tagName).toBe("LI");
    });

    test("When receiving an empty list Then should not render any tasks", () => {
        // Arrange
        const emptyList = [];

        // Act
        const { getByRole } = render(<ItemList itemList={emptyList}/>);
        const list = getByRole("list");

        // Assert
        expect(list.tagName).toBe("UL");
        expect(list.children.length).toBe(0);
    });
});
