import React from "react";
import Section from "../Section";
import { Select } from "chakra-react-select";
import { useDispatch } from "react-redux";
import { doFilterPriority } from "./reducer";
const priority = [
  { value: "high", label: "High", colorScheme: "red" },
  { value: "medium", label: "Medium", colorScheme: "orange" },
  { value: "low", label: "Low", colorScheme: "yellow" },
];
export default function Priority() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(doFilterPriority(e));
  };
  return (
    <Section title="Filter by Priority">
      <Select
        onChange={handleChange}
        isMulti
        name="priority"
        options={priority}
        placeholder="Select Priorities..."
        closeMenuOnSelect={false}
      />
    </Section>
  );
}
