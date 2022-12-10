import React, { useContext} from "react";
import classes from './Title.module.css';
import CartContext from "../store/Cart-Context";

const Title = ({item}) =>  {
  const {title,price,imageUrl} = item;
  const CartCtx = useContext(CartContext)
  const AddtoCartHandler = () => {
    console.log(item)
    CartCtx.addItem(item)
        // let isPresent = false;
        // cart.forEach((product) => {
        //     if(item.id === product.id)
        //     isPresent = true;
        // })
        // if(isPresent)
        //     return;
        // updateCart([...cart,item])
  }
 


  return (
    <React.Fragment>
    <section className={classes.cards}>
      <div className={classes.imagebox}>
        <img src={imageUrl} alt="Music is life " />
        <div className={classes.detailsss}>{title}</div>
        <div className={classes.detailss}>{price}</div>
        <button className={classes.button} onClick={AddtoCartHandler}>+ Add</button>
      </div>
    </section>
    </React.Fragment>
  );
}

// useEffect(() => {
//     fetchData():
// },[]);

export default Title;