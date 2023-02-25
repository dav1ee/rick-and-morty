'use client';

import { useState } from 'react';
import Link from 'next/link';

interface PaginationProps {
  route: string;
  totalPages: number;
  currentPage: number;
  portion?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  route,
  totalPages,
  currentPage,
  portion = 10,
}) => {
  const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portion));
  const pages = Array.from({ length: totalPages }, (_, index: number) => index + 1);

  const portionCount = Math.ceil(totalPages / portion);

  const leftPortionPageNumber = (portionNumber - 1) * portion + 1;
  const rightPortionPageNumber = portionNumber * portion;

  return (
    <div className="pagination">
      {portionNumber > 1 && (
        <button className="pagination-control" onClick={() => setPortionNumber(portionNumber - 1)}>
          {'←'}
        </button>
      )}

      <div className="pagination-pages">
        {pages
          .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map((page) => (
            <Link
              className={`pagination-pages__item ${page === currentPage && 'active'}`}
              href={
                route === '/characters'
                  ? {
                      pathname: route,
                      query: { page },
                    }
                  : `${route}/${page}`
              }
              key={page}>
              {page}
            </Link>
          ))}
      </div>

      {portionCount > portionNumber && (
        <button className="pagination-control" onClick={() => setPortionNumber(portionNumber + 1)}>
          {'→'}
        </button>
      )}
    </div>
  );
};
