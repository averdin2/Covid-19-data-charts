import axios from 'axios';

const globalURL = 'https://covid19.mathdro.id/api';
const statesURL = 'https://api.covidtracking.com/v1/states';

// Was using proxy server to fix cors errors
//const proxyServer = 'https://cors-anywhere.herokuapp.com/';

export const fetchCountryData = async (country) => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(`${globalURL}/countries/${country}`);

    const modifiedData = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate: new Date(lastUpdate).toDateString(),
    };

    let arr = [];
    arr.push(modifiedData);

    return arr;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGlobalDailyData = async () => {
  try {
    const { data } = await axios.get(`${globalURL}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${globalURL}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

export const fetchStates = async () => {
  try {
    const { data } = await axios.get(`${statesURL}/info.json`);

    const modifiedData = data.map((statesInfo) => ({
      state: statesInfo.state,
      name: statesInfo.name,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchStateData = async (state) => {
  try {
    const { data } = await axios.get(`${statesURL}/${state}/current.json`);

    // Need to create a stateData variable to convert format of data into an array of objects.
    // Recharts cannot read the data if not formatted this way.
    let stateData = [];
    stateData.push(data);
    const modifiedData = stateData.map((data) => ({
      state: data.state,
      confirmed: data.positive,
      deaths: data.death,
      recovered: data.recovered ? data.recovered : 0,
      lastUpdate: new Date(data.dateModified).toDateString(),
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
