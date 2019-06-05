import { connect } from 'react-redux';
import { hasErrored } from '../Actions/index'

export const fetchBooks = async (URL, option) => {
  const response = await fetch(URL, option);
  if (!response.ok) {
     hasErrored(response.text)    
      throw new Error("Failed to get Books");
  }
  return await response.json();
};

