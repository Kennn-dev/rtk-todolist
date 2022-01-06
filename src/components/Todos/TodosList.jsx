import { Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { searchSelector, todoListSelector } from "../../redux/selectors";
import Item from "./Item";

export default function TodosList() {
  const todoList = useSelector(todoListSelector);

  return (
    <Stack spacing={"unset"} direction="column">
      {todoList.length &&
        todoList.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            status={item.status}
            content={item.content}
            priority={item.priority}
          />
        ))}
    </Stack>
  );
}
