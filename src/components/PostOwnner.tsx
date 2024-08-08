"use client";
import React from "react";

export default function PostOwnner({}) {
  return (
  <div className="vstack gap-3">
  <div className="d-flex align-items-center gap-3">
    <img
      src={ImagePath}
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span className="fw-semibold fs-5">{fullName} {studentId}</span>
  </div>

  <span>{postTitle}</span>

  <div className="d-flex align-items-center gap-1">
    <img src="/like.png" width={20}></img>
    <span className="text-muted">{likeNum} คน</span>
  </div>
  <hr className="m-0 border" />
</div>
  )
}
