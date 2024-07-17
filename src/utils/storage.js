export const setSearch = (keyword) => {
  localStorage.setItem("search", keyword);
};

export const getSearch = () => localStorage.getItem("search");
