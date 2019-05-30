import { key } from './key';

export const fetchBooks = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=React.js&orderBy=newest&key=${key}`);
  if (!response.ok) {
    throw Error("Failed to get Books");
  }
  else {
    return response.json();
  }
}