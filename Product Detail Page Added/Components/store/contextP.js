import React,{useContext, useState} from "react";
import CartContext from "./Cart-Context";
// const defaultCartState = {
//     items:[],
// }
// const cartReducer = (state,action) => {

// }

// const [] = useReducer(cartReducer,defaultCartState)




function CartProvider(props){
    const [cart,updateItems] = useState([])
    const addItemCart = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
            if(item.id === product.id)
            isPresent = true;
        })
        if(isPresent){
            alert('Item is Already Added in the Cart')
            return;

        }
           
        updateItems([...cart,item])

    }
    const removeItemCart = (id) => {
        // const list = CartContext.items.filter((item) => item.id !== id)
        const list = cart.filter((item) => item.id !== id)
        updateItems(list)
    }

    const cartContextss = {
        items:cart,
        totalAmount:0,
        addItem: addItemCart,
        removeItem: removeItemCart
        

    }
    return (
        <CartContext.Provider value={cartContextss}>
            {props.children}
        </CartContext.Provider>
    )

}


export default CartProvider;