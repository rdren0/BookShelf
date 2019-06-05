import React from "react";
import { BookDetails } from "../BookDetails/BookDetails";
import { shallow } from "enzyme";

describe("Book Details", () => {
  let wrapper;
  let mockBook;
  let mockStore;
  beforeEach(() => {
    mockStore = {};
    mockBook = { volumeInfo: { title: "Great Gatsby" }, saleInfo: {} };
    wrapper = shallow(<BookDetails book={mockBook} store={mockStore} />);
  });

  it("should match snapshot", () => {
    console.log(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
});
