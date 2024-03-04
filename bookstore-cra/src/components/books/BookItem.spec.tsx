import React from "react";
import { render } from "@testing-library/react";
import { BookItem } from "./BookItem";
import { BookStoreThemeProvider } from "../../context/themeContext";
import { Book } from "../../models/Book.model";

const dummyBook: Book = {
  isbn: "1",
  title: "Dummy Book",
  category: "사회",
  form: "종이책",
  price: 10000,
  author: "Dummy Author",
  summary: "Dummy Summary",
  detail: "Dummy detail",
  pages: 100,
  contents: "Dummy Contents",
  published_date: "2024-03-03",
  img: 1,
  likes: 2,
};

describe("BookItem", () => {
  it("렌더 여부", () => {
    const { getByText, getByAltText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );
    // 예를 들어 나중에 말줄임 표시라든가 이런거 테스트할때
    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText("10,000원")).toBeInTheDocument(); //formating
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByAltText(dummyBook.title)).toHaveAttribute(
      "src",
      `https://picsum.photos/id/${dummyBook.img}/600/600`
    );
  });
});
