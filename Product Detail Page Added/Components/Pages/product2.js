import React from "react";
import classes from "./product2.module.css";
const HighlightedQuote = (props) => {
  return (
    <div className={classes.li}>
        <section className={classes.section}>
        <div className={classes.l2}>
            <div className={classes.div12}>
            <img src={props.imageUrl} alt="pick" className={classes.img}/>
            <img src={props.imageUrl1} alt="image" className={classes.img1} />
            </div>
            {/* <div>

            </div> */}
            <div>
                <img src={props.imageUrl2} alt="image" className={classes.imgage1} />
            </div>
        </div>
        <div className={classes.ti}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.price}>{props.price}</div>
            <div className={classes.para}>
                <p>{props.detail}</p>
            </div>
        </div>
        </section>
    </div>
  );
};
export default HighlightedQuote;
