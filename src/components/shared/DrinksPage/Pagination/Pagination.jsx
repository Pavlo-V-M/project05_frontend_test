// import React, { useState } from 'react';
import styles from '../DrinksPage.module.scss';
import ReactPaginate from 'react-paginate';
import DrinksCard from '../DrinksCard';
import { fetchRecipets } from '../Api/getRecipets';
import { useSelector, useDispatch } from 'react-redux';
import { getDataRecipets, setDataRecipets } from '../redux/recipetsSlice';
import { getFilterValue } from '../redux/filterSlice';
import { getPagePaginate } from '../redux/pagePaginateSlice';

const PaginatedItems = ({ itemsPerPage }) => {
  // const [value, setValue] = useState('');
  const dataRecipets = useSelector(getDataRecipets);
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const pagePaginate = useSelector(getPagePaginate);
  console.log(pagePaginate);

  // if (filterValue !== value) {
  //   setValue(filterValue);
  // }

  // console.log(value);
  const pageCount = Math.ceil(dataRecipets.totalCount / itemsPerPage);

  const onCkick = event => {
    const newOffset = event.nextSelectedPage + 1;

    fetchRecipets(newOffset, filterValue)
      .then(data => {
        dispatch(setDataRecipets(data));
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <DrinksCard currentItems={dataRecipets.cocktails} />
      <ReactPaginate
        nextLabel=">"
        onClick={onCkick}
        pageCount={pageCount}
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
