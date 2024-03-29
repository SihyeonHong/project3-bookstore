import styled from "styled-components";
import { Title } from "../components/common/Title";
import { BooksFilter } from "../components/books/BooksFilter";
import { BooksViewSwitcher } from "../components/books/BooksViewSwitcher";
import { BooksList } from "../components/books/BooksList";
import { Pagination } from "../components/books/Pagination";
import { useBooks } from "../hooks/useBooks";
import { Empty } from "../components/common/Empty";
import { Link } from "react-router-dom";
import { FaSmileWink } from "react-icons/fa";
import { Loading } from "@/components/common/Loading";

export const Books = () => {
  const { books, pagination, isEmpty, isBooksLoading } = useBooks();

  if (isBooksLoading || !books || !pagination) {
    return <Loading />;
  }

  if (isEmpty) {
    return (
      <Empty
        title="검색 결과가 없습니다."
        description={<Link to="/books">전체 검색 결과로 이동</Link>}
        icon={<FaSmileWink />}
      />
    );
  }

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BookStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        {isEmpty && (
          <Empty
            title="검색 결과가 없습니다."
            description={<Link to="/books">전체 검색 결과로 이동</Link>}
            icon={<FaSmileWink />}
          />
        )}
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
