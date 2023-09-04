// import React, { useState } from 'react';
import styles from '../DrinksPage.module.scss';
import ReactPaginate from 'react-paginate';
import DrinksCard from '../DrinksCard';
import { useState, useEffect } from 'react';
import { fetchRecipets } from '../Api/getRecipets';
import { useSelector, useDispatch } from 'react-redux';
import { setDataRecipets, getDataRecipets } from '../redux/recipetsSlice';
import { getFilterValue } from '../redux/filterSlice';
import { getPagePaginate, setPaginateValue } from '../redux/pagePaginateSlice';
import { getNumberCards } from '../redux/numberCardsSlice';
import PropTypes from 'prop-types';

const PaginatedItems = ({ pageCount }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const numberCards = useSelector(getNumberCards);
  const dataRecipets = useSelector(getDataRecipets);

  useEffect(() => {
    if (dataRecipets.totalPages > pageCount) {
      setCount(pageCount);
    }
    if (dataRecipets.totalPages < pageCount) {
      setCount(dataRecipets.totalPages);
    }
  }, [dataRecipets.totalPages, numberCards, pageCount]);

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
        pageCount={count}
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
PaginatedItems.propTypes = {
  pageCount: PropTypes.number.isRequired,
};

export default PaginatedItems;
