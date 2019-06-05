import React from "react";
import { shallow } from "enzyme";
import { Book } from "./Book";

describe("Book", () => {
  it("should match the snapshot", () => {
    let book = { volumeInfo: { title: "Great Gatsby" } };
    let mockStore = {}
    let wrapper = shallow(<Book book={book} store={mockStore} />);
    expect(wrapper).toMatchSnapshot();
  });
});
