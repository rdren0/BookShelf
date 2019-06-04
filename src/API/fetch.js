

export const fetchBooks = async (URL, option) => {
  const response = await fetch(URL, option);
  if (!response.ok) {
    throw new Error("Failed to get Books");
  }
  return await response.json();
};


