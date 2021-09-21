import React, { Component } from 'react';
import { Nav, GlobalChart, CountryPicker, LocationChart, Title, StatePicker } from './components';
import { Container, Grid, Paper } from '@material-ui/core';

import styles from './App.module.css';

import { fetchGlobalDailyData, fetchCountryData, fetchStateData } from './api';

export default class App extends Component {
  state = {
    globalData: {},
    countryData: {},
    country: '',
    stateData: {},
    stateName: '',
    stateCode: '',
  };

  async componentDidMount() {
    const fetchedGlobalDailyData = await fetchGlobalDailyData();

    this.setState({ globalData: fetchedGlobalDailyData });
  }

  handleCountryChange = async (country) => {
    const fetchedCountryData = await fetchCountryData(country);

    this.setState({ countryData: fetchedCountryData, country: country });
  };

  handleStateChange = async (state) => {
    const fetchedStateData = await fetchStateData(state);

    this.setState({ stateData: fetchedStateData, stateCode: state });
  };

  render() {
    const { globalData, countryData, country, stateData, stateCode } = this.state;
    return (
      <div>
        <Nav />
        <Container maxWidth="lg" className={styles.container}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={8}>
              <Paper className={styles.paper}>
                <GlobalChart data={globalData} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <Paper className={styles.paper}>
                <Title>Covid 19 Country Data</Title>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <LocationChart data={countryData} location={country} />
              </Paper>
            </Grid>
            {/* <Grid item xs={12} md={8} lg={6}>
              <Paper className={styles.paper}>
                <Title>Covid 19 US State Data</Title>
                <StatePicker handleStateChange={this.handleStateChange} />
                <LocationChart data={stateData} location={stateCode} />
              </Paper>
            </Grid> */}
          </Grid>
        </Container>
      </div>
    );
  }
}
