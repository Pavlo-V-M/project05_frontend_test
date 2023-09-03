// import React, { useState } from 'react';
import styles from '../DrinksPage.module.scss';
import ReactPaginate from 'react-paginate';
import DrinksCard from '../DrinksCard';
// import { useState, useEffect } from 'react';
import { fetchRecipets } from '../Api/getRecipets';
import { useSelector, useDispatch } from 'react-redux';
import { setDataRecipets } from '../redux/recipetsSlice';
import { getFilterValue } from '../redux/filterSlice';
import { getPagePaginate, setPaginateValue } from '../redux/pagePaginateSlice';
import { getNumberCards } from '../redux/numberCardsSlice';

const PaginatedItems = ({ pageCount }) => {
  // const [pageCount, setPageCount] = useState(8);
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const numberCards = useSelector(getNumberCards);
  console.log(pageCount);
  // useEffect(() => {
  //   const handleResize = event => {
  //     const width = event.target.innerWidth;
  //     if (width < 768) {
  //       setPageCount(5);
  //     } else {
  //       setPageCount(8);
  //     }
  //   };
  //   window.addEventListener('resize', handleResize);
  // }, [dispatch]);

  const pagePaginate = useSelector(getPagePaginate);

  const onClick = event => {
    const newOffset = event.nextSelectedPage + 1;
    console.log(newOffset);
    fetchRecipets(newOffset, filterValue, numberCards)
      .then(data => {
        dispatch(setDataRecipets(data));
        dispatch(setPaginateValue(event.nextSelectedPage));
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <DrinksCard />
      <ReactPaginate
        nextLabel=">"
        onClick={onClick}
        pageCount={pageCount}
        pageRangeDisplayed={7}
        marginPagesDisplayed={1}
        // initialPage={0}
        forcePage={pagePaginate}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        pageClassName={styles.page}
        previousClassName={styles.previous}
        nextClassName={styles.next}
        activeClassName={styles.active}
      />
    </>
  );
};

export default PaginatedItems;
