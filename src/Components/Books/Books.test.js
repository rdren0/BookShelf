import React from "react";
import { shallow } from "enzyme";
import Book from "./Book";

describe("Book", () => {
  it("should match the snapshot", () => {
    let book = { volumeInfo: { title: "Great Gatsby" } };

    let wrapper = shallow(<Book book={book} />);
    expect(wrapper).toMatchSnapshot();
  });
});
