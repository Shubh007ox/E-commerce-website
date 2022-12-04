import React,{Fragment} from "react";
import Footers from "./Components/main/Footer";
import Mainheader from "./Components/main/Mainheader";
import MusicList from "./Components/main/MusicList";


function App() {
  return (
    <Fragment>
      <Mainheader />
      <MusicList />
      <Footers />
    </Fragment>
  );
}

export default App;
