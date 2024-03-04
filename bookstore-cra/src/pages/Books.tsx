import styled from "styled-components";
import { Title } from "../components/common/Title";
import { BooksFilter } from "../components/books/BooksFilter";
import { BooksViewSwitcher } from "../components/books/BooksViewSwitcher";
import { BooksList } from "../components/books/BooksList";
import { BooksEmpty } from "../components/books/BooksEmpty";
import { Pagination } from "../components/books/Pagination";
import { useBooks } from "../hooks/useBooks";

export const Books = () => {
  const { books, pagination, isEmpty } = useBooks();

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BookStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>

        {isEmpty && <BooksEmpty />}
        {!isEmpty && <BooksList books={books} />}
        {!isEmpty && <Pagination pagination={pagination} />}
      </BookStyle>
    </>
  );
};

const BookStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;