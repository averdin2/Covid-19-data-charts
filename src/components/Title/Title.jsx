import React from 'react';
import { Typography } from '@material-ui/core';

export default function Title(props) {
  return (
    <Typography component="h1" variant="h4" color="primary" gutterBottom>
      {props.children}
    </Typography>
  )
}
