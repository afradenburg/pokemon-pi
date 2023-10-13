import React from "react";

export const Pagination = ({ page, totalPages }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((pageNumber) => (
        <button key={pageNumber} onClick={() => page(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
