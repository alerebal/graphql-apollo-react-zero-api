import React from "react";

// helpers
import { cutText, firstLetterCapital } from "../helpers/textEdit";

export const Post: React.FC<any> = ({ post }) => {
  return (
    <div className="post card">
      <div className="post__header card__header">
        <h3 className="post__title text-center">
          {post.title.length < 50 ? firstLetterCapital(post.title ): firstLetterCapital(cutText(post.title, 40))}
        </h3>
        <p className="post__username">
          <span className='card__username'>{post.user.username}</span>
        </p>
      </div>
      <div className="post__body card__body">
        <p className="post__body">{cutText(post.body, 250)}</p>
      </div>
      <div className="post__footer">
        <p>
          <span className={'link'}>{post.user.email}</span>
        </p>
      </div>
    </div>
  )
};
