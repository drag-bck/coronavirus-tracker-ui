import axios from "axios";

export function setCovidData(data) {
  return {
    type: "SET_COVID_DATA",
    payload: data,
  };
}

export function fetchCovidData() {
  axios
    .get("https://ancient-ocean-19140.herokuapp.com/covid_data")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => console.log("ERROR: could not fetch data\n", err));
}
