"use client";
import reply from " /src/app/libs/comments.js"
import Reply from "./Reply";

export default function Comment({
  ImagePath,
  username,
  commentTitle,
  likes,
  replies,
}): CommentProps {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
          <img
            src= {ImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{commentTitle}</span>
            {(likes > 0) &&}
            <div className="d-flex align-items-center gap-1">
              <img src="/like.png" width={20}></img>
              <span className="text-muted">{likes} คน</span>
            </div>
            }
          </div>
        </div>
        {replies.map(reply => {
          return(
            <Reply {...reply}key={reply?.username} />

          )
        }
    </div>
  );
}

