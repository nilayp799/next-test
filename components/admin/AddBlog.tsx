import { useRef } from "react";
import styles from './addBlog.module.css'

const AddBlog = () =>{
  const date = new Date();
  const titleRef = useRef<HTMLInputElement>(null!);
  const authorRef = useRef<HTMLInputElement>(null!);
  const imageRef = useRef<HTMLInputElement>(null!);
  const descRef = useRef<HTMLInputElement>(null!);
  const contentRef = useRef<HTMLTextAreaElement>(null!);

  const createBlog = async() =>{
    if(titleRef.current.value =='' || authorRef.current.value =='' || imageRef.current.value =='' || descRef.current.value=='' || contentRef.current.value==''){
      alert('please enter all the values..');
      return false;
    }
    const res = await fetch('/api/blogs/createBlog',
    {
      method:'POST',
      body: JSON.stringify({
        title: titleRef.current.value,
        author:authorRef.current.value,
        image:imageRef.current.value,
        description:descRef.current.value,
        content:contentRef.current.value,
        date: date.getDate().toString()+'/' + (date.getMonth()+1).toString()+ '/' + date.getFullYear().toString(),
      }),
      headers:{
        'Content-Type':'application/json'
      }
    });

    const msg = await res.json();
    alert("created blog succesfully..!")
    titleRef.current.value ="";
    authorRef.current.value = "";
    imageRef.current.value="";
    descRef.current.value ="";
    contentRef.current.value ="";
  }

  return(
    <>
    <div className={styles.formboldMainWrapper}>
  <div className={styles.formboldFormWrapper}>
    <h1>Write Blog</h1>
    
      <div className="formboldMb5">
        <label className={styles.formboldFormLabel} > Title </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Blog Title"
          className={styles.formboldFormInput}
          ref={titleRef}
        />
      </div>

      <div className="formbold-mb-5">
        <label className={styles.formboldFormLabel}> Author Name </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your name"
          className={styles.formboldFormInput}
          ref={authorRef}
        />
      </div>

      <div className="formbold-mb-5">
        <label className={styles.formboldFormLabel}> cover image </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter image link"
          className={styles.formboldFormInput}
          ref={imageRef}
        />
      </div>

      <div className="formbold-mb-5">
        <label className={styles.formboldFormLabel}> key description </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter breif about blog"
          className={styles.formboldFormInput}
          ref={descRef}
        />
      </div>

      <div className="formbold-mb-5">
        <label  className={styles.formboldFormLabel}> Blog Content </label>
        <textarea
          name="message"
          id="message"
          placeholder="Type your ideas.."
          className={styles.formboldFormInput}
          ref={contentRef}
        ></textarea>
      </div>

      <div>
        <button className={styles.formboldBtn} onClick={createBlog}>Submit Blog</button>
      </div>
  </div>
</div>
<style></style>
    </>
  )
}

export default AddBlog;