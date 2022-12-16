import React from "react";
import classes from './store.module.css';
import MusicList from "../list/MusicList";
import Footer from "./Footer";

function StorePage(){
    return(
        <div className={classes.main}>
            <div className={classes.h2}>
                <h1>PICK YOUR MUSIC</h1>
            </div>
        <MusicList />
        <Footer />
      </div>
    )

}


export default StorePage;