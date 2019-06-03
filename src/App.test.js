import React from "react";
import { shallow } from "enzyme";
import { App, mapStateToProps, mapDispatchToProps } from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    it.skip("should set props as an object with an array from state", () => {
      const mockState = {
        books: [{1:'book'}, {2:'book also'}],
        mockError: "Something went wrong!"
      };
      const expected = {
        books: [{1:'book'}, {2:'book also'}]
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
