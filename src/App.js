import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Map from "./components/Map";
import DataTable from "./components/DataTable";
import { COVID_DATA_URL } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { parsePrimaryData, parseMapData, parseTableData } from "./utils";
import { isMobile } from "react-device-detect";

const App = () => {
  const covidData = useSelector((state) => state.covidData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCovidData();
  }, []);

  const fetchCovidData = () => {
    axios
      .get(COVID_DATA_URL)
      .then((res) => {
        dispatch({ type: "SET_COVID_DATA", payload: res.data });
      })
      .catch((err) => console.log("ERROR: could not fetch data\n", err));
  };

  return (
    <div className="App">
      <section>
        <Header />
      </section>

      <section>
        <Summary data={parsePrimaryData(covidData)} />
      </section>

      {isMobile ? (
        <>
          <section>
            <Map data={parseMapData(covidData)} />
          </section>

          <section>
            <DataTable data={parseTableData(covidData)} />
          </section>
        </>
      ) : (
        <div className="desktop-style">
          <section>
            <Map data={parseMapData(covidData)} />
          </section>

          <section>
            <DataTable data={parseTableData(covidData)} />
          </section>
        </div>
      )}
    </div>
  );
};
export default App;
