import React from "react";
import classes from './store.module.css';
import MusicList from "../list/MusicList";

function StorePage(){
    return(
        <React.Fragment>
            <div className={classes.h2}>
                <h1>PICK YOUR MUSIC</h1>
            </div>
        <MusicList />
        <footer className={classes.foot}>
          <h1 className={classes.h1}>The Generics</h1>
        </footer>
  
      </React.Fragment>
    )

}


export default StorePage;