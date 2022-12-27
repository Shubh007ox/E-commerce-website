import classes from './StartingPageContent.module.css';
import Footer from './Footer';

const StartingPageContent = () => {
  return (
    <div className={classes.divv}>
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
    <Footer />
    </div>
  );
};

export default StartingPageContent;
