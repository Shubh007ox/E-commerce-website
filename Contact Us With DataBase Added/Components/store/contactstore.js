import React,{useRef} from "react";

import classes from './contactS.module.css';

function ContactStore(props){
    const nameRef = useRef('');
    const emailRef = useRef('');
    const numberRef = useRef('');
  
    function submitHandler(event) {
      event.preventDefault();
  
  
      const info = {
        name: nameRef.current.value,
        Email: emailRef.current.value,
        number: numberRef.current.value,
      };
  
      props.onAddinfo(info);
    }
    return(
        <section>
            <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='email id'>Email</label>
                <input type="email" id='email' ref={emailRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='number'>YOur Phone-Number</label>
                <input type="number" id='number' ref={numberRef} />
            </div>
            <button className={classes.s3}>Add Info </button>
        </form>
    </section>
    )

}


export default ContactStore;