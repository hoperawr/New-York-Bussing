import { React, useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";

const Header = () => {
  // shouldnt be in header, temporary thing, only check this when need to ask other shit from server
  const [busNumbers, setBusNumbers] = useState([]);
  const [displayNumbers, setdisplayNumbers] = useState(false);
  const [pubLine, setpubLine] = useState([]);
  async function checkReady() {
    console.log("Checking Server");
    while (true) {
      // should create a loading page here when loading stuff
      const res = await axios.get(
        "https://nyc-bus-engine-k3q4yvzczq-an.a.run.app/api/bus_trip/ready"
      );
      if (res.data.status === "Ready") {
        console.log("Server Ready");
        break;
      }
    }
    const res2 = await axios.get(
      "https://nyc-bus-engine-k3q4yvzczq-an.a.run.app/api/bus_trip/getVehRef"
    );
    // list of all the bus numbers
    console.log(res2.data);
    setBusNumbers(res2.data);

    const res3 = await axios.get(
      "https://nyc-bus-engine-k3q4yvzczq-an.a.run.app/api/bus_trip/getPubLineName"
    );
    // list of all the bus numbers
    console.log(res3.data);
    setpubLine(res3.data);
  }
  useEffect(() => {
    checkReady();
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        top: "0",
        height: "75px",
        backgroundColor: "#98F5F9",
        width: "100vw",
        margin: "0",
        padding: "0",
        left: "0",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>New York Bussing</div>
      <Dropdown header="Bus Numbers" data={busNumbers} />
      <Dropdown header="Pub Lines" data={pubLine} />
    </div>
  );
};

export default Header;
