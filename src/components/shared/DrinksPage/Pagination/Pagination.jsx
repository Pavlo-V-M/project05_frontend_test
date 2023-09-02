// import React, { useState } from 'react';
import styles from '../DrinksPage.module.scss';
import ReactPaginate from 'react-paginate';
import DrinksCard from '../DrinksCard';
import { fetchRecipets } from '../Api/getRecipets';
import { useSelector, useDispatch } from 'react-redux';
import { getDataRecipets, setDataRecipets } from '../redux/recipetsSlice';
import { getFilterValue } from '../redux/filterSlice';
import { getPagePaginate, setPaginateValue } from '../redux/pagePaginateSlice';

const PaginatedItems = ({ itemsPerPage }) => {
  // const [value, setValue] = useState('');
  const dataRecipets = useSelector(getDataRecipets);
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const pagePaginate = useSelector(getPagePaginate);

  // if (filterValue !== value) {
  //   setValue(filterValue);
  // }

  // console.log(value);
  const pageCount = Math.ceil(dataRecipets.totalCount / itemsPerPage);

  const onCkick = event => {
    const newOffset = event.nextSelectedPage + 1;
    console.log(newOffset);
    fetchRecipets(newOffset, filterValue)
      .then(data => {
        dispatch(setDataRecipets(data));
        dispatch(setPaginateValue(event.nextSelectedPage));
      })
      .catch(error => console.log(error));
  };
  console.log(pagePaginate);

  return (
    <>
      <DrinksCard />
      <ReactPaginate
        nextLabel=">"
        onClick={onCkick}
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
