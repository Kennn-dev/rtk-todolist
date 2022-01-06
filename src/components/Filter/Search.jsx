import React from "react";
import Section from "../Section";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { doSearch } from "./reducer";
import { useDispatch } from "react-redux";
import debounce from "../../utils/debounce";

export default function Search() {
  const inputRef = React.useRef(null);
  const dispatch = useDispatch();
  const handleChangeValue = debounce((e) => {
    dispatch(doSearch(e.target.value));
  }, 300);
  return (
    <Section title="Search">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input
          onChange={handleChangeValue}
          ref={inputRef}
          placeholder="Search Todos"
        />
      </InputGroup>
    </Section>
  );
}
