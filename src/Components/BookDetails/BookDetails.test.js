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
    wrapper = shallow(<BookDetails {...mockBook} />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
