export const todoListSelector = (state) => {
  const { status, priority, search } = state.filter;
  let rs = state.todos
    .filter((z) => z.content.includes(search))
    .filter((z) =>
      status === "completed"
        ? z.status === true
        : status === "todo"
        ? z.status === false
        : z
    );
  if (priority.length > 0) {
    rs = rs.filter(
      (z) => priority.findIndex((i) => i.value === z.priority.value) !== -1
    );
  }
  return rs;
};
export const searchSelector = (state) => state.filter.search;
