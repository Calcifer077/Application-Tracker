import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  justify-content: right;
  gap: 8px;
  margin-top: 18px;
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border: 1px solid var(--color-white);
  border-radius: 4px;
  transition: all ease-in-out 0.3s;

  &:hover {
    background-color: var(--color-filter-active);
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    border: 1px solid var(--color-border);
  }
`;

const StyledPageCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageCount = styled.p`
  font-weight: bold;
`;

const PAGE_COUNT = 5;

function Pagination({ pages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const numOfPages = Math.ceil(pages / PAGE_COUNT);
  let currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  function handlePrevious() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", previous);
    setSearchParams(searchParams);
  }

  function handleNext() {
    const next = currentPage === numOfPages ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  return (
    <StyledDiv>
      <StyledIcon onClick={handlePrevious} $disabled={currentPage === 1}>
        <FaChevronLeft />
        Previous
      </StyledIcon>

      <StyledPageCount>
        <PageCount>{currentPage}</PageCount>
      </StyledPageCount>

      <StyledIcon onClick={handleNext} $disabled={currentPage === numOfPages}>
        Next
        <FaChevronRight />
      </StyledIcon>
    </StyledDiv>
  );
}

export default Pagination;
