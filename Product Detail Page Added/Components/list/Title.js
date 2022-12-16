import React, { useContext} from "react";
import classes from './Title.module.css';
import CartContext from "../store/Cart-Context";
import { Link } from "react-router-dom";

const Title = ({item}) =>  {
  const {id,title,price,imageUrl,Artist} = item;
  const CartCtx = useContext(CartContext)
  const AddtoCartHandler = () => {
    console.log(item)
    CartCtx.addItem(item)

  }
 


  return (
    <div className={classes.main2}>
    <section className={classes.cards}>
      <div className={classes.imagebox}>
        <h3 className={classes.h3}>Music Album</h3>
        <Link to={`/store/${id}`}>
        <img src={imageUrl} alt="Music is life " className={classes.ing} />
        </Link>
        <ul className={classes.detailsss}>
          <li>{title}</li>
          <li>{Artist}</li>
        </ul>
        <div className={classes.detailss}>{price}</div>
        <button className={classes.button} onClick={AddtoCartHandler}>+ Add</button>
      </div>
    </section>
    </div>
  );
}

// useEffect(() => {
//     fetchData():
// },[]);

export default Title;