const currentDate = new Date();

const handleCurrentDate = () => {
  return currentDate.toLocaleDateString().split("/").reverse().join("-");
};

const handleWeekAgo = () => {
  const weekAgo = new Date();
  weekAgo.setDate(currentDate.getDate() - 7);
  return weekAgo.toLocaleDateString().split("/").reverse().join("-");
};

export const baseUrl = (query) => {
  return `https://newsapi.org/v2/everything?q=${query}&from=${handleWeekAgo}&to${handleCurrentDate}&language=en&apiKey=4f5f1867a74e45f980842a94affd7cc5`;
};
