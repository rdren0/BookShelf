
import {fetchBooks} from "./fetch";

describe("fetch calls", () => {
  let mockBooks;
  let URL;
  beforeEach(() => {
    URL = "books.com";
    mockBooks = [
      { id: 1, 
        title: "Great Gastby"},
      {id: 22,
        title: "Hitchhiker's Guide"}
    ];
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockBooks)
      })
    );
  });



  it("should take an expected URL;", async () => {
    fetchBooks(URL);
    expect(fetch).toHaveBeenCalledWith(URL, undefined);
  });

  it("should return expected books", async () => {
    const result = await fetchBooks(URL);
    expect(result).toEqual(mockBooks);
  });
  
  
  
  
  it("should throw an error if something goes wrong on the server side", async () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        status: 500,
        ok: false,
        json: jest.fn(() => Promise.resolve("Failed to get Books"))
      })
    );
    const expected = new Error("Failed to get Books");
    await expect(fetchBooks(URL, undefined)).rejects.toEqual(expected);
  });

  
})