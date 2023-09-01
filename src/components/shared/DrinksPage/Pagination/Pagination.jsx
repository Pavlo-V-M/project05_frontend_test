// import React, { useState } from 'react';
import styles from '../DrinksPage.module.scss';
import ReactPaginate from 'react-paginate';
import DrinksCard from '../DrinksCard';
import { fetchRecipets } from '../Api/getRecipets';
import { useSelector, useDispatch } from 'react-redux';
import { getDataRecipets, setDataRecipets } from '../redux/recipetsSlice';
import { getFilterValue } from '../redux/filterSlice';

const PaginatedItems = ({ itemsPerPage }) => {
  const dataRecipets = useSelector(getDataRecipets);
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  console.log(filterValue);

  // console.log(dataRecipets);
  // const [nextItems, setNextItems] = useState(0);

  // const endOffset = itemOffset + itemsPerPage;

  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataRecipets.totalCount / itemsPerPage);

  const onCkick = event => {
    // console.log(event.nextSelectedPage);
    const newOffset = event.nextSelectedPage + 1;

    fetchRecipets(newOffset, filterValue)
      .then(data => {
        dispatch(setDataRecipets(data));
        // setStatus(STATUS.RESOLVED);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <DrinksCard currentItems={dataRecipets.cocktails} />
      <ReactPaginate
        nextLabel=">"
        onClick={onCkick}
        // onPageActive={onPageActive}
        // onPageChange={handlePageClick}
        pageCount={pageCount}
        initialPage={0}
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
