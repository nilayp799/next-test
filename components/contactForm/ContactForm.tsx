import { useRouter } from 'next/router';
import { useRef } from 'react';
import styles from './contactForm.module.css';

const ContactForm = () =>{
  const router =  useRouter();
  const date = new Date();

  const fullNameRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const subjectRef = useRef<HTMLInputElement>(null!);
  const msgRef = useRef<HTMLTextAreaElement>(null!);
  
  const submitMessage = async()=>{
    if(fullNameRef.current.value =='' || emailRef.current.value =='' || subjectRef.current.value =='' || msgRef.current.value==''){
      alert('please enter all the values..');
      return false;
    }
    const res = await fetch('/api/form/submitContactMessage',{
      method:'POST',
      body: JSON.stringify({
        fullName : fullNameRef.current.value,
        email: emailRef.current.value,
        subject: subjectRef.current.value,
        message: msgRef.current.value,
        date: date.getDate().toString()+'/' + (date.getMonth()+1).toString()+ '/' + date.getFullYear().toString(),
        time: date.getHours() + ":" +date.getMinutes()
      }),
      headers:{
        'Content-Type' : 'application/json'
      }
    });

    const msg = await res.json();
    console.log(msg)
    fullNameRef.current.value ="";
    emailRef.current.value = "";
    subjectRef.current.value="";
    msgRef.current.value ="";

    router.replace('/')

  }

  return(
    <>
    <div className={styles.formboldMainWrapper}>
    form validations are not implemented
  <div className={styles.formboldFormWrapper}>
    <h1>Contact Form</h1>
    
      <div className="formboldMb5">
        <label className={styles.formboldFormLabel} > Full Name </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className={styles.formboldFormInput}
          ref={fullNameRef}
        />
      </div>

      <div className="formbold-mb-5">
        <label className={styles.formboldFormLabel}> Email Address </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className={styles.formboldFormInput}
          ref={emailRef}
        />
      </div>

      <div className="formbold-mb-5">
        <label className={styles.formboldFormLabel}> Subject </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          className={styles.formboldFormInput}
          ref={subjectRef}
        />
      </div>

      <div className="formbold-mb-5">
        <label  className={styles.formboldFormLabel}> Message </label>
        <textarea
          name="message"
          id="message"
          placeholder="Type your message"
          className={styles.formboldFormInput}
          ref={msgRef}
        ></textarea>
      </div>

      <div>
        <button className={styles.formboldBtn} onClick={submitMessage}>Submit</button>
      </div>
  </div>
</div>
<style></style>
    </>
  )
}

export default ContactForm;