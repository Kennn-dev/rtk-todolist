import React from "react";
import Section from "../Section";
import { Text, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { doFilterStatus } from "./reducer";
export default function Status() {
  const [value, setValue] = React.useState("all");
  const dispatch = useDispatch();
  const handleChange = (vl) => {
    setValue(vl);
    dispatch(doFilterStatus(vl));
  };
  return (
    <Section title="Filter by Status">
      <Text fontWeight="bold" mb="8px" as="div"></Text>
      <RadioGroup onChange={handleChange} value={value}>
        <Stack direction="row">
          <Radio value="all">All</Radio>
          <Radio value="completed">Completed</Radio>
          <Radio value="todo">To do</Radio>
        </Stack>
      </RadioGroup>
    </Section>
  );
}
