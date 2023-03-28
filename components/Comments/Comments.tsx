import styles from "./comments.module.css";
import { useRef, useEffect, useState } from "react";

const Comments = (props: any) => {
  const authorRef = useRef<HTMLInputElement>(null!);
  const commentRef = useRef<HTMLInputElement>(null!);
  const date = new Date();
  console.log(props.data.comments);

  const [latestComments, setLatestComments] = useState(props.data.comments);

  useEffect(() => {
    async function fetchData(){
      const commentsRes = await fetch(
        "/api/blogs/comments/getComments/?bid=" + props.data.bid,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());
  
      const comments = await commentsRes.comments.map((comment: any) => {
        return {
          id: comment["_id"],
          author: comment.author,
          comment: comment.comment,
          date: comment.date,
          time: comment.time,
        };
      });
  
      setLatestComments(comments);
    }
    fetchData()
  }, [latestComments]);

  const addComment = async () => {
    if (authorRef.current.value == "" || commentRef.current.value == "") {
      alert("please enter all the details..");
      return false;
    }
    const commentData = {
      author: authorRef.current.value,
      comment: commentRef.current.value,
      date:
        date.getDate().toString() +
        "/" +
        (date.getMonth() + 1).toString() +
        "/" +
        date.getFullYear().toString(),
      time: date.getHours() + ":" + date.getMinutes(),
      bid: props.data.bid,
    };

    const res = await fetch("/api/blogs/comments/addComment", {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const msg = await res.json();
    console.log(msg);
    authorRef.current.value = "";
    commentRef.current.value = "";

    setLatestComments([...latestComments,commentData])
  };
  return (
    <>
      <h3>Comments</h3>
      <div className={styles.formboldFormWrapper}>
        comment your thoughts..!
        <div className="formboldMb5">
          <label className={styles.formboldFormLabel}> Name </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className={styles.formboldFormInput}
            ref={authorRef}
          />
        </div>
        <div className="formbold-mb-5">
          <label className={styles.formboldFormLabel}> Comment </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={styles.formboldFormInput}
            ref={commentRef}
          />
        </div>
        <div>
          <button className={styles.formboldBtn} onClick={addComment}>
            Submit
          </button>
        </div>
      </div>
      <div>
        {props.data.comments.length > 0 ? (
          latestComments.map((comment: any, index: any) => {
            return (
              <>
                <h5>by {comment.author}</h5>
                <h6>
                  on {comment.date} at {comment.time}
                </h6>
                <p>{comment.comment}</p>
              </>
            );
          })
        ) : (
          <>be the first one to comment!!</>
        )}
      </div>
    </>
  );
};

export default Comments;
