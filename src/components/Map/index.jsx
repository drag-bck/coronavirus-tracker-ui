import React from "react";
import FusionCharts from "fusioncharts";
import Maps from "fusioncharts/fusioncharts.maps";
import India from "fusioncharts/maps/fusioncharts.india";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import "./Map.scss";

ReactFC.fcRoot(FusionCharts, Maps, India, FusionTheme);

const Map = (props) => {
  const dataSource = {
    chart: {
      // canvasBgAlpha: "0",
      bgColor: "#ffffff",
      // bgAlpha: "50",
      // animation: "0",
      showLabels: "0",
      usehovercolor: "1",
      canvasbordercolor: "#F2F2F2",
      bordercolor: "#fff",
      showlegend: "0",
      showshadow: "0",
      showTooltip: "1",
      // legendposition: "BOTTOM",
      // legendborderalpha: "0",
      // legendbordercolor: "ffffff",
      // legendallowdrag: "0",
      // legendshadow: "0",
      caption: "Covid state-wise trend",
      hoverFillalpha: "20",
      hovercolor: "#b3ffec",
      showborder: "1",
      entityfillhovercolor: "#E3F2FD",
      theme: "fusion",
    },
    colorrange: {
      minvalue: "0",
      startlabel: "Low",
      endlabel: "High",
      code: "#e65c00",
      gradient: "1",
      color: [
        {
          minvalue: "0",
          maxvalue: "200000",
          code: "#ffbaba",
        },
        {
          maxvalue: "500000",
          code: "#ff7b7b",
        },
        {
          maxvalue: "1000000",
          code: "#ff5252",
        },

        {
          maxvalue: "2000000",
          code: "#ff0000",
        },

        {
          maxvalue: "2000000",
          code: "#a70000",
        },
        {
          maxvalue: "5000000",
          code: "#a70000",
        },
        {
          maxvalue: "10000000",
          code: "#a70000",
        },
      ],
      maxvalue: 0,
    },
  };

  dataSource.data = props.data;

  const chartConfigs = {
    type: "india",
    width: 300,
    height: 400,
    dataFormat: "json",
    showLabels: "0",
    usehovercolor: "1",
    dataSource: dataSource,
  };
  return (
    <div className="map">
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default Map;
