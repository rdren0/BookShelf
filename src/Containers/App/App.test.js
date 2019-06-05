import React from "react";
import { shallow } from "enzyme";
import { App, mapStateToProps, mapDispatchToProps } from "./App";
import { getBooks, addFavorite, deleteFavorite } from "../../Actions/index";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match the snapshot", () => {
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
    let mockDistpatch = jest.fn();

    it("should call dispatch on addFavorites", () => {
      const mockState = [{ id: 3, title: "Red Dwarf" }];
      const actionToDispatch = addFavorite(mockState);
      const mappedProps = mapDispatchToProps(mockDistpatch);
      mappedProps.addFavorite(mockState);
      expect(mockDistpatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it("should call dispatch on getBooks", () => {
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

    it("should call dispatch on deleteFavorites", () => {
      const mockState = [{ id: 3, title: "Red Dwarf" }];
      const actionToDispatch = deleteFavorite(mockState);
      const mappedProps = mapDispatchToProps(mockDistpatch);
      mappedProps.deleteFavorite(mockState);
      expect(mockDistpatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it.skip("should call dispatch on anError", () => {
      const mockState = { hasError: true };
      const actionToDispatch = anError(mockState);
      const mappedProps = mapDispatchToProps(mockDistpatch);
      mappedProps.anError(mockState);
      expect(mockDistpatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it.skip("should call dispatch on loading", () => {
      const mockState = { isloadingr: false };
      const actionToDispatch = loading(mockState);
      const mappedProps = mapDispatchToProps(mockDistpatch);
      mappedProps.loading(mockState);
      expect(mockDistpatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
