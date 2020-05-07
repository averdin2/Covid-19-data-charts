import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './StatePicker.module.css';

import{ fetchStates } from '../../api';

export default function CountryPicker({ handleStateChange }) {
  const [fetchedStates, setFetchedStates] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedStates(await fetchStates());
    }

    fetchAPI();
  }, [setFetchedStates]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => {handleStateChange(e.target.value)}}>
        <option value=""> - </option>
        {fetchedStates.map((state, i) => <option key={i} value={state.state}>{state.name}</option>)}
      </NativeSelect>
    </FormControl>
  )
}