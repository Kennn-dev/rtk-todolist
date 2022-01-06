import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Priority from "./components/Filter/Priority";
import Search from "./components/Filter/Search";
import Status from "./components/Filter/Status";
import Section from "./components/Section";
import TodosForm from "./components/Todos/TodosForm";
import TodosList from "./components/Todos/TodosList";

function App() {
  return (
    <div className="App">
      <Box w="100%" marginY={50}>
        <Heading textAlign="center" as="h1" size="2xl">
          Todos App With Redux
        </Heading>
        <Box w="70%" marginX="auto">
          <Search />
          <Status />
          <Priority />
          <Section title="Todo List">
            <Stack direction="column" spacing={"15px"}>
              <TodosForm />
              <TodosList />
            </Stack>
          </Section>
        </Box>
      </Box>
    </div>
  );
}

export default App;
