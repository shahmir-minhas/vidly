
import React, { Component } from "react";
import _ from "lodash";
//inputs that components gonna take
//which means first define the interface of component in parent
//that what inputs it gonna take and the events it gonna raise

// sfc
const Pagination = (props) => {

  const { itemsCount, pageSize, onPageChange, currentPage} = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if(pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <React.Fragment>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page} className={page=== currentPage? "page-item active": "page-item"}>
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
