import React from 'react';
import { Link } from 'react-router-dom';

import dayjs from '../../../../utils/dayjs';
import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

export function CommentListItem({ comment }) {
  return (
    <article
      id={`comment-${comment.comment_id}`}
      className="comment-CommentListItem"
    >
      <div className="comment-CommentListItem__avatar">
        <ProportionalImage src={comment.commenter.image} boxAspectRatio={1} />
      </div>
      <div className="comment-CommentListItem__body">
        <h3 className="comment-CommentListItem__commenter">
          {comment.commenter.user_name}
        </h3>
        <p className="comment-CommentListItem__comment">{comment.comment}</p>
        <footer className="comment-CommentListItem__footer">
          <Link to={`#comment-${comment.comment_id}`}>
            <time
              dateTime={dayjs(comment.posted_at).toISOString()}
              title={dayjs(comment.posted_at).toISOString()}
            >
              {dayjs(comment.posted_at).fromNow()}
            </time>
          </Link>
        </footer>
      </div>
    </article>
  );
}
