import React from "react";
import Footer from "../components/Pages/Footer";
import classes from './About.module.css';


function One() {
    return (
        <React.Fragment>
        <div>
          <section className={classes.section}>
          <div>
          <img
            className={classes.img}
            src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
            alt="Crazy Dogs"
          />
          </div>
            <p className={classes.p}>
              From the beginning we’ve had one goal: to empower artists to build
              effective websites for their music. It all started in 1999, with a
              single band website built by Bandzoogle's founder Chris Vinson for
              his alt-rock band, Rubberman. Grassroots promotion, plus the online
              community that the website created, helped the band get a record
              deal. In between tours, Chris worked at the record label designing
              websites for multi-platinum selling artists. To save time, he built
              a "control panel" to let artists make changes themselves. Realizing
              this could help independent bands and musicians build their own
              websites, Chris launched Bandzoogle in late 2003. As the needs of
              musicians have evolved, so has our mission to help them succeed
              online. Hired as Bandzoogle’s first support tech in 2007, Stacey
              Bedford became CEO in 2018. Named as a Billboard Digital Power
              Player in 2019, Stacey has helped expand the platform to include
              everything a musician needs to run a successful business online.
              From mobile design options, to commission-free music and merch
              sales, built-in crowdfunding, and fan subscriptions tools, now tens
              of thousands of artists from around the world use Bandzoogle to
              create beautiful websites and power their direct-to-fan marketing
              and sales.
            </p>
          </section>
        </div>
        {/* <footer className={classes.fot}>
        <div className={classes.footer}>
          The Generics
        </div>
        <div className={classes.footerI}>
          <ul className={classes.ull}>
            <li>
              <a href="https://www.youtube.com" className={classes.aa}>youtube</a>
            </li>
          </ul>
        </div>
  
      </footer> */}
      <Footer />
      </React.Fragment>
    )
}


export default One;