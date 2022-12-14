import React from "react";
import classes from './Home.module.css';

function Home() {
  return (
    <React.Fragment>
    <header className={classes.header}>
      <h1 className={classes.hw}>The Generics</h1>
      <button className={classes.latest}>Get Our Latest AlBlum</button>
      <button className={classes.latest}>ClickHere</button>
    </header>
    <section className={classes.container} id="tours">
      <h2 className={classes.h2}>TOURS -- </h2>
      <div>
        <div className={classes.tourItem}>
          <span className={classes.s1}>JUly 16</span>
          <span className={classes.s2}>DETROIT, MI</span>
          <span className={classes.s4}>DTE ENERGY MUSIC THEATRE</span>
          <button className={classes.s3}>Buy Tickets</button>
        </div>
        <div  className={classes.tourItem}>
          <span className={classes.s1}>JUly 16</span>
          <span className={classes.s2}>DETROIT, MI</span>
          <span className={classes.s4}>DTE ENERGY MUSIC THEATRE</span>
          <button  className={classes.s3}>Buy Tickets</button>
        </div>
        <div  className={classes.tourItem}>
          <span className={classes.s1}>JUly 16</span>
          <span className={classes.s2}>DETROIT, MI</span>
          <span className={classes.s4}>DTE ENERGY MUSIC THEATRE</span>
          <button  className={classes.s3}>Buy Tickets</button>
        </div>
        <div  className={classes.tourItem}>
          <span className={classes.s1}>JUly 16</span>
          <span className={classes.s2}>DETROIT, MI</span>
          <span className={classes.s4}>DTE ENERGY MUSIC THEATRE</span>
          <button  className={classes.s3}>Buy Tickets</button>
        </div>
        <div  className={classes.tourItem}>
          <span className={classes.s1}>JUly 16</span>
          <span className={classes.s2}>DETROIT, MI</span>
          <span className={classes.s4}>DTE ENERGY MUSIC THEATRE</span>
          <button  className={classes.s3}>Buy Tickets</button>
        </div>
        <div  className={classes.tourItem}>
          <span className={classes.s1}>JUly 16</span>
          <span className={classes.s2}>DETROIT, MI</span>
          <span className={classes.s4}>DTE ENERGY MUSIC THEATRE</span>
          <button  className={classes.s3}>Buy Tickets</button>
        </div>
      </div>
    </section>
    <footer className={classes.fM}>
      <div className={classes.fD}>
        The Generics
      </div>
      <div className={classes.footerIsd}>
        <ul className={classes.ullll}>
          <li>
            <a href="https://www.youtube.com" className={classes.aaa}>youtube</a>
          </li>
        </ul>
      </div> 
    </footer> 
    </React.Fragment>
  )
}

export default Home;

//     <div className={classes.div}>
//       <div>
//         <h1 className={classes.h1}>The Generics!!</h1>
//         <h3 className={classes.h2}>Get Our Latest AlBlum</h3>
//       </div>
//       <div>
//         <div className={classes.to}>
//         <h2>TOURS</h2>
//         </div>
//       </div>
//       <section>
//         <ul>
//           <li>
//             The show of Power
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
//
