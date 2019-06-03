
import React from "react";
import { shallow } from "enzyme";
import { Container } from "../Container.js";

describe("Container", () => {
    let mockStore = {};
    let mockBooks = [{id:1, title: "something"}, {id:2, title: "something else"}]
  it("should match the snapshot", () => {
    let wrapper = shallow(<Container books={mockBooks} store={mockStore}/>)
    expect(wrapper).toMatchSnapshot();
  });
});
