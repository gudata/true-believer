import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

class Protections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {protections: props.protections}
    this.showBox = this.showBox.bind(this);
  }

  // handleChange = (event) => {
  //   console.log(event);
  //   console.log(event.target.checked);
  //   // item.enabled = !item.enabled;
  //   // e => setToggled(e.target.checked)
  // }

  showBox(item) {
    const labelId = `checkbox-list-secondary-label-${item.key}`;


    return (
      <ListItem
        key={item.key}
        secondaryAction={
          <Switch
            edge="end"
            onChange={(event) => this.props.handleChange(event, item)}
            checked={item.enabled}
            inputProps={{ 'aria-labelledby': labelId }}
          />
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              alt={`${item.label}`}
              src={item.list_image}
            />
          </ListItemAvatar>
          <ListItemText
            id={labelId}
            // primaryTypographyProps={{ style: text }} https://www.codegrepper.com/code-examples/javascript/material+ui+listitem+text+color
            // primaryTypographyProps={{ color: 'secondary' }}
            primary=<Typography variant="h6" color='secondary'>
              {item.label}
            </Typography>

          />
        </ListItemButton>
      </ListItem>
    )
  }


//   <Paper background-color='secondary'>
//   <FormControl component="fieldset">
//     <FormLabel component="legend">{item.name}</FormLabel>
//     <FormGroup aria-label="position" row>
//       <FormControlLabel
//         value="end"
//         control={<Switch color="primary" />}
//         label={item.name}
//         labelPlacement="end"
//       />
//     </FormGroup>
//   </FormControl>
// </Paper>


  render() {
    return (
      <React.Fragment>
        <Grid container spacing={4}>
          <Grid item xs={12} >
            <Typography variant="h2" align="center">Available Protections</Typography>
          </Grid>
        </Grid>
        <List dense sx={{ width: '100%',  bgcolor: 'background.paper' }}>
            {this.state.protections.map((item) => {
              return this.showBox(item);
            })}
        </List>
      </React.Fragment>
    );
  }
}

export default Protections;
