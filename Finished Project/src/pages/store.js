import React from "react";
import classes from './store.module.css';
import MusicList from "../components/list/MusicList";
import Footer from "../components/Pages/Footer";

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