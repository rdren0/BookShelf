import React from "react";
import { shallow } from "enzyme";
import {
  Container,
  mapStateToProps,
  mapDispatchToProps
} from "./Container";
import { getBooks } from "../../Actions";

describe("Container", () => {
  let mockStore = {};
  let mockBooks = [
    { id: 1, title: "something" },
    { id: 2, title: "something else" }
  ];
  it("should match the snapshot", () => {
    let wrapper = shallow(<Container books={mockBooks} store={mockStore} />);
    expect(wrapper).toMatchSnapshot();
  });
  describe("mapStateToProps", () => {
    it("should set props as an object with an array from state", () => {
      const mockState = {
        books: [
          { id: 1, title: "Great Gastby" },
          { id: 2, title: "Jurrasic Park" }
        ],
        mockError: "Something went wrong!"
      };
      const expected = {
        books: [
          { id: 1, title: "Great Gastby" },
          { id: 2, title: "Jurrasic Park" }
        ]
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
  describe("mapDispatchToProps", () => {
    it("should call dispatch on allNotes", () => {
      const mockDispatch = jest.fn();
      const mockState = {
        books: [
          { id: 1, title: "Great Gastby" },
          { id: 2, title: "Jurrasic Park" }
        ]
      };
      const actionToDispatch = getBooks(mockState);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getBooks(mockState);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
