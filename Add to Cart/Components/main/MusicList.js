import React from "react";
import ProductsArr from "./MusicL";
import Title from "./Title";
const MusicList = ({onClicked}) => {
    return (
    <section>
        {
            ProductsArr.map((item) => (
                <Title item={item} key={item.id} onClicked={onClicked} />
            ))
        }


    </section>


    )


}


export default MusicList;