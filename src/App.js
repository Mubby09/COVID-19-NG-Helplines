import React from "react";
import "./App.css";
import Header from "./components/header";
import Lagos from "./components/Lagos";
import Abuja from "./components/Abuja";
import Enugu from "./components/Enugu";
import Benue from "./components/Benue";
import Kogi from "./components/Kogi";
import Kwara from "./components/kwara";
import Niger from "./components/Niger";
import Plateau from "./components/Plateau";
import Kano from "./components/Kano";
import Yobe from "./components/Yobe";
import Katsina from "./components/Katsina";
import Sokoto from "./components/Sokoto";
import Zamfara from "./components/Zamfara";
import Adamawa from "./components/Adamawa";
import Bauchi from "./components/Bauchi";
import Borno from "./components/Borno";
import Gombe from "./components/Gombe";
import Taraba from "./components/Taraba";
import River from "./components/River";
import Edo from "./components/Edo";
import Delta from "./components/Delta";
import CrossRiver from "./components/CrossRiver";
import Bayelsa from "./components/Bayelsa";
import AkwaIbom from "./components/AkwaIbom";
import Imo from "./components/Imo";
import Ebonyi from "./components/Ebonyi";
import Anambra from "./components/Anambra";
import Abia from "./components/Abia";
import Ekiti from "./components/Ekiti";
import Oyo from "./components/Oyo";
import Osun from "./components/Osun";
import Ondo from "./components/Ondo";
import Ogun from "./components/Ogun";
import Kaduna from "./components/Kaduna";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <ReactPlayer
          className="center"
          url="https://www.youtube.com/watch?v=3BVQ9Scdglg"
        />
      </div>
      <h4 style={{ fontSize: "15px" }}>
        <u> The following List Consists of the CORONA VIRUS state Helplines</u>
      </h4>
      <Lagos />
      <Abuja />
      <Enugu />
      <Benue />
      <Kogi />
      <Kwara />
      <Niger />
      <Plateau />
      <Kano />
      <Yobe />
      <Katsina />
      <Sokoto />
      <Zamfara />
      <Adamawa />
      <Bauchi />
      <Borno />
      <Gombe />
      <Taraba />
      <River />
      <Edo />
      <Delta />
      <CrossRiver />
      <Bayelsa />
      <AkwaIbom />
      <Imo />
      <Ebonyi />
      <Anambra />
      <Abia />
      <Ekiti />
      <Oyo />
      <Osun />
      <Ondo />
      <Ogun />
      <Kaduna />
    </div>
  );
}

export default App;
