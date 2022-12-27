import React, { useContext } from "react";
import ProductsArr from "./Music";
import Title from "./Title";

const MusicList = () => {
  // const Global = useContext(CartContext)
  // console.log(Global)

  return (
    <section>
      {ProductsArr.map((item) => (
        <Title item={item} key={item.id} />
      ))}
    </section>
  );
};

export default MusicList;
