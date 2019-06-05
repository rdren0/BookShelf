import React from "react";
import { shallow } from "enzyme";
import { Book } from "./Book";

describe("Book", () => {
  let wrapper;
  beforeEach(() => {
    let book = { volumeInfo: { title: "Great Gatsby" } };
    let mockStore = {}
    let mockFN = jest.fn()
    wrapper = shallow(<Book book={book} store={mockStore} alterFavorites={mockFN} />);
  })
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an add button when favorited is false', () => {
    wrapper.setState({ favorited: false });
    expect(wrapper).toMatchSnapshot();
  })
  it('should render a delete button when favorited is true', () => {
    wrapper.setState({ favorited: true });
    expect(wrapper).toMatchSnapshot();
  })

  it('should call addFavorite when button is pressed', () => {
    let MockFn = jest.spyOn(wrapper.instance(), "addFavorite");
    let button  = wrapper.find('.favorites')
    button.simulate('click')
    expect(MockFn).toHaveBeenCalled()
  })
});
