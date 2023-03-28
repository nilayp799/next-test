import styles from './comments.module.css';
import { useRef } from 'react';

const Comments = (props:any) =>{
  const authorRef = useRef<HTMLInputElement>(null!);
  const commentRef = useRef<HTMLInputElement>(null!);
  const date = new Date();

  const addComment = async()=>{
    if(authorRef.current.value =='' || commentRef.current.value ==''){
      alert('please enter all the details..');
      return false;
    }
    const res = await fetch('/api/blogs/comments/addComment',{
      method:'POST',
      body: JSON.stringify({
        author : authorRef.current.value,
        comment: commentRef.current.value,
        date: date.getDate().toString()+'/' + (date.getMonth()+1).toString()+ '/' + date.getFullYear().toString(),
        time: date.getHours() + ":" +date.getMinutes(),
        bid:props.data.bid,
      }),
      headers:{
        'Content-Type' : 'application/json'
      }
    });

    const msg = await res.json();
    console.log(msg)
    authorRef.current.value ="";
    commentRef.current.value = "";
  }
  return(
    <>
    <h3>Comments</h3>
    <div className={styles.formboldFormWrapper}>
      <div className="formboldMb5">
        <label className={styles.formboldFormLabel} > Name </label>
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
        <button className={styles.formboldBtn} onClick={addComment}>Submit</button>
      </div>
      </div>
      <div>
        {props.data.comments.lenth > 0 ? props.data.comments.map((comment:any,index:any)=>{
          return(
            <>
            <h5>by {comment.author}</h5>
            <h6>on {comment.date} at {comment.time}</h6>
            <p>{comment.comment}</p>
            </>
          )
        }):<>be the first one to comment!!</>
      }
      </div>
    </>
  )
}

export default Comments;