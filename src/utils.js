export const addComma = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const parsePrimaryData = (data) => {
  if (data.covidData.length < 1) {
    return;
  }

  let result = { confirmed: 0, active: 0, recovered: 0, deceased: 0 };
  if (data.covidData.length < 1) {
    return;
  }
  data.covidData.forEach((item) => {
    if (item.sno == "11111") {
      result = {
        confirmed: item.positive,
        active: item.active,
        recovered: item.cured,
        deceased: item.death,
      };
    }
  });
  return result;
};

export const parseMapData = (data) => {
  let dummyData = [
    {
      id: "001",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "002",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "003",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "004",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
      value: 1,
    },
    {
      id: "005",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "006",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "007",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "008",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "009",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "010",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "011",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "012",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "013",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "014",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "015",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "016",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "017",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "018",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "019",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "020",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "021",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "022",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "023",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "024",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "025",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "026",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "027",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "028",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "029",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "030",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "031",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "032",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "033",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "034",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "035",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
    {
      id: "036",
      confirmed: 0,
      active: 0,
      recovered: 0,
      deceased: 0,
      tooltext: "",
    },
  ];

  const stateMapping = {
    1: "002",
    2: "001",
    3: "003",
    4: "004",
    5: "005",
    6: "006",
    7: "007",
    8: "008",
    10: "010",
    11: "011",
    12: "012",
    13: "013",
    14: "014",
    15: "015",
    16: "016",
    17: "017",
    18: "018",
    20: "019",
    21: "020",
    22: "021",
    23: "022",
    24: "023",
    25: "024",
    26: "025",
    27: "026",
    28: "027",
    29: "028",
    30: "029",
    31: "030",
    32: "031",
    33: "032",
    34: "036",
    35: "034",
    36: "033",
    37: "035",
  };

  data.covidData.forEach((item) => {
    dummyData.forEach((ele) => {
      if (stateMapping[item.sno] == ele.id) {
        ele.value = item.positive;
        ele.confirmed = item.positive;
        ele.active = item.active;
        ele.recovered = item.cured;
        ele.deceased = item.death;
        ele.tooltext = `<div><div><b>$lName</b></div><div>Confirmed : ${item.positive}</div><div>Active : ${item.active}</div><div>Recovered : ${item.cured}</div><div>deceased : ${item.death}</div></div>`;
      }
    });
  });

  return dummyData;
};

export const parseTableData = (data) => {
  if (data.covidData.length < 1) {
    return;
  }
  let result = [];
  data.covidData.forEach((item, index) => {
    if (item.sno < 50) {
      result.push({
        key: index,
        stateName: item.state_name,
        active: item.active,
        confirmed: item.positive,
        recovered: item.cured,
        deceased: item.death,
      });
    }
  });
  return result;
};
