export const addTodo = (data) => {
  return {
    type: "addTodo",
    payload: data,
  };
};
export const changeStatus = (data) => {
  return {
    type: "todos/status",
    payload: data,
  };
};
export const search = (query) => {
  return {
    type: "filter/search",
    payload: query,
  };
};
export const filterStatus = (query) => {
  return {
    type: "filter/status",
    payload: query,
  };
};
export const filterPriority = (query) => {
  return {
    type: "filter/priority",
    payload: query,
  };
};
