import React from 'react';

import { Toolbar, Typography, AppBar } from '@material-ui/core';

export default function Nav() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Covid 19 Data Charts
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
