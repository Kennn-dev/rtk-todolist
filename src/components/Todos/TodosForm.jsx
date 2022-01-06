import React, { useState, useRef } from "react";
import { Stack, Input, Box, Button } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { priority } from "../../constants";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer";
export default function TodosForm() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [priorityValue, setPriorityValue] = useState(priority[0]);
  const handleChangeSelect = (value) => {
    setPriorityValue(value);
  };
  const handleSubmit = () => {
    const data = {
      content: inputRef?.current?.value,
      priority: priorityValue,
    };
    // console.log(data);
    dispatch(addTodo(data));
    // Clear
    inputRef.current.value = "";
  };
  return (
    <Stack direction="row">
      <Input ref={inputRef} placeholder="New todo" type="text" />
      <Box w={"250px"}>
        <Select
          name="priority"
          options={priority}
          placeholder="Priority"
          onChange={handleChangeSelect}
          closeMenuOnSelect={true}
        />
      </Box>
      <Button
        onClick={handleSubmit}
        paddingX={"25px"}
        colorScheme="teal"
        size="md"
      >
        Add
      </Button>
    </Stack>
  );
}
