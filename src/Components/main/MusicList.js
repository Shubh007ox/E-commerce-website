import React from "react";
import ProductsArr from "./MusicL";
import Title from "./Title";
const MusicList = () => {
    return (
    <section>
        {
            ProductsArr.map((item) => (
                <Title item={item} key={item.id} />
            ))
        }


    </section>


    )


}


export default MusicList;