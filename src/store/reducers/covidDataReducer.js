const initState = {
  covidData: [],
};

const covidDataReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_COVID_DATA":
      return { ...state, covidData: action.payload };
  }

  return state;
};

export default covidDataReducer;
