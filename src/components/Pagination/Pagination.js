import React from 'react';
import { PaginationContainer } from './Pagination.Style';
import { Button } from '../Button/Button.Style';

const Pagination = ({ currentPage, onPageChange, isNextDisabled }) => (
  <PaginationContainer>
    <Button 
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </Button>
    <span>Page {currentPage}</span>
    <Button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={isNextDisabled}
    >
      Next
    </Button>
  </PaginationContainer>
);

export default Pagination;