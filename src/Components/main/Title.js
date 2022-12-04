import React from "react";
import classes from './Title.module.css';

const Title = ({item}) =>  {
  const {title,price,imageUrl} = item;

  return (
    <React.Fragment>
    <section className={classes.cards}>
      <div className={classes.imagebox}>
        <img src={imageUrl} alt="image is " />
        <div className={classes.detailsss}>{title}</div>
        <div className={classes.detailss}>{price}</div>
        <button className={classes.button}>+ Add</button>
      </div>
    </section>
    </React.Fragment>
  );
}

export default Title;