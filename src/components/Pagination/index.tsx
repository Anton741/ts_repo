import classes from "./styles.module.css";


 type PaginationProps = {
  totalPages: number,
  onPageChange: (page:number) => void,
  currentPage : number
 }

const Pagination = ({ currentPage, onPageChange, totalPages }:PaginationProps) => {

  const handlePageChange = (page:number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? classes.active : ''}>
          <a  onClick={() => handlePageChange(i)}>{i}</a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <ul className={classes.pagination}>
      { currentPage > 1  && <li key='prev'>
          <a  onClick={() => handlePageChange(currentPage - 1)}>Prev</a>
        </li>}
      {renderPageNumbers()}
      {currentPage < totalPages &&  <li key='next'>
          <a  onClick={() => handlePageChange(currentPage + 1)}>Next</a>
        </li>}
    </ul>
  );
};

export default Pagination;
