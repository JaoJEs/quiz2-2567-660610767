"use client";
export default function Comment({
  ImagePath,
  username:string,
  commentTitle,
  likes:number,
  replies,
}) {
  return (
    <div>
      your code for Comment component here ...
      {/* You can use map-loop to render Reply component here */}
    </div>
  );
}
