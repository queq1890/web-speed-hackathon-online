import React from 'react';
// FIXME: refactor code to remove lodash-es
import _ from 'lodash-es';

import { CommentListItem } from '../CommentListItem';

export function CommentList({ list }) {
  return (
    <ul>
      {_.map(list, (comment, i) => (
        <li key={i} className="comment-CommentList__item">
          <CommentListItem comment={comment} />
        </li>
      ))}
    </ul>
  );
}
