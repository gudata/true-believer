import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import { SignalCellularAlt } from '@mui/icons-material';
// import IconButton from '@mui/material/IconButton';
import Protected from "./Protected.js"

import { grey } from '@mui/material/colors';
import { Container } from "@mui/material";
import { Alert } from "@mui/material";


class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {protections: props.protections, protected: props.protected};
  }

  showBox(item) {
    if (!item.enabled) {
      return null;
    }

    return (
      <Grid item xs={6} key={item.key}>
        <Protected item={item}/>
      </Grid>
    )
  }

  render(){

    return (
      <Grid container spacing={4}>
        <Grid item xs={12} >
          <Typography variant="h2" align="center">Active Shields</Typography>
        </Grid>
        { this.state.protected
            ? this.state.protections.map((item) => {
                return this.showBox(item);
              })
            :  <Container>
                <Alert severity="error">You are unprotected!</Alert>
              </Container>
          }

        <Grid item xs={6} >
          <Link to="/protections" >
            <Button size="small" sx={{mx: 'auto', display: 'flex' }}>
              <AddCircleOutlineIcon color="action" style={{ color: grey[300], width: "100px", height: "100px", }} />
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }
}


export default Status;


