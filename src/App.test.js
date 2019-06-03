import React from "react";
import { shallow } from "enzyme";
import { App, mapStateToProps, mapDispatchToProps } from "./App";
import { getStartingBooks } from "./Actions";

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
          {id: 1, title: "Great Gastby"},
          {id: 2, title:"Jurrasic Park"}
        ] ,
        mockError: "Something went wrong!"
      };
      const expected = {
        books: [
          {id: 1, title: "Great Gastby"},
          {id: 2, title:"Jurrasic Park"}
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
          {id: 1, title: "Great Gastby"},
          {id: 2, title:"Jurrasic Park"}
        ]      
      };
      const actionToDispatch = getStartingBooks(mockState);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getStartingBooks(mockState);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
