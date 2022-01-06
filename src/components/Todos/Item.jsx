import React from "react";
import { Flex, Wrap, Checkbox, Text, Badge } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeStatus } from "./reducer";
const Item = ({ status, priority, content, id }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeStatus({ id, status: e.target.checked }));
  };
  return (
    <Flex
      padding={"15px 20px"}
      opacity={status ? 0.6 : 1}
      cursor="pointer"
      borderRadius={"8px"}
      _hover={{
        backgroundColor: "#fafafa",
      }}
      justifyContent="space-between"
    >
      <Wrap spacing={"10px"}>
        <Checkbox defaultChecked={status} onChange={handleChange} />
        <Text
          textDecoration={status ? "line-through" : ""}
          color="gray.500"
          mb="8px"
          as="div"
        >
          {content}
        </Text>
      </Wrap>
      <Badge colorScheme={priority.colorScheme}>{priority.label}</Badge>
    </Flex>
  );
};

export default Item;
