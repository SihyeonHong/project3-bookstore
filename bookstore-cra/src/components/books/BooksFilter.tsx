import styled from "styled-components";
import { useCategory } from "../../hooks/useCategory";
import { Button } from "../common/Button";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";

export const BooksFilter = () => {
  const { categories } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (categoryName: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (categoryName === "전체") {
      newSearchParams.delete(QUERYSTRING.CATEGORY);
    } else {
      newSearchParams.set(QUERYSTRING.CATEGORY, categoryName);
    }
    setSearchParams(newSearchParams);
  };

  const handleRecent = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (newSearchParams.get(QUERYSTRING.RECENT)) {
      newSearchParams.delete(QUERYSTRING.RECENT);
    } else {
      newSearchParams.set(QUERYSTRING.RECENT, "true");
    }
    setSearchParams(newSearchParams);
  };

  return (
    <>
      <BooksFilterStyle>
        <div className="category">
          {categories.map((item, idx) => (
            <Button
              size="medium"
              scheme={item.isActive ? "primary" : "normal"}
              key={idx}
              onClick={() => handleCategory(item.name)}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className="recent">
          <Button
            size="medium"
            scheme={searchParams.get(QUERYSTRING.RECENT) ? "primary" : "normal"}
            onClick={handleRecent}
          >
            신간
          </Button>
        </div>
      </BooksFilterStyle>
    </>
  );
};

const BooksFilterStyle = styled.div`
  display: flex;
  gap: 24px;

  .category {
    display: flex;
    gap: 8px;
  }
`;
