import React from "react";
import classes from './Contact.module.css';
import ContactStore from "../components/store/contactstore";

function Contact(){
    const addInfoHandler = async(info) => {
        const response = await fetch('https://contact-us-9c094-default-rtdb.firebaseio.com/conatctus.json',{
            method:'POST' ,
            body: JSON.stringify(info),
            headers:{
                'Content-type' : 'application/json'
                
            }
        });
        const data = await response.json();
        console.log(data)
    }

    return(
    <React.Fragment>
    <div className={classes.div}>
        {/* <header>
            <h1>The Generics</h1>
        </header> */}
        <div className={classes.div1}>
            <h2>Contact US AT-</h2><br></br>
            <li className={classes.na}>Email Us -- shubham14apr@gmail.com</li><br></br>
            <li>Contact Number -- 9039828155</li>
            <li>ADDRESS -- 331 Sethi Towar,Indore</li>
        </div>
        <div className={classes.div2}>
        <h1>Fill The Deatails..We will Contact You Soon!!..</h1>
        </div>
        <div className={classes.div3}>

            <ContactStore onAddinfo={addInfoHandler} />
        </div>
    </div>
    </React.Fragment>
    )


}
export default Contact;