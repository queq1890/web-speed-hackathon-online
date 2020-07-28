import React from 'react';
// FIXME: refactor code to remove lodash-es
import chunk from 'lodash-es/chunk';
import map from 'lodash-es/map';

import { BlogCard } from '../BlogCard';

export function BlogCardList({ list, columnCount }) {
  const rows = chunk(list, columnCount);

  return (
    <div className="blog-list-BlogCardList">
      {map(rows, (rowItems, i) => (
        <div key={i} className="blog-list-BlogCardList__row">
          {map(rowItems, (item, j) => (
            <div
              key={j}
              className="blog-list-BlogCardList__column"
              style={{ width: `calc(100% / ${columnCount})` }}
            >
              <BlogCard blog={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
