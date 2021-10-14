import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';


import MainNavigation from './Layout/MainNavigation.js'
import Status from './ActiveProtections/Status.js';
import Protections from './Protections/Protections.js';
import fiveG from './Protections/images/fiveG.png';
import covid19 from './Protections/images/SARS-CoV-2.png';
import bad_eyes from './Protections/images/bad_eyes.png';
import bad_luck from './Protections/images/bad_luck.png';
import vegan from './Protections/images/vegan.png';
import energy_vampire from './Protections/images/energy_vampire.png'
import vampire from './Protections/images/vampire.png'
import train_crash from './Protections/images/train_crash.png'
import airplane_crash from './Protections/images/airplane_crash.png'


import Paper from '@mui/material/Paper';

import { createTheme, ThemeProvider } from '@mui/material/styles';

// https://bareynol.github.io/mui-theme-creator/
// https://duncanleung.com/accessing-material-ui-theme-object-emotion-styled-component-css-prop/
// https://mui-treasury.com/styles/switch/
const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#3d5377',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#1a84ed',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    background: {
      default: '#192231',
      paper: '#ffffff',
    },
    type: 'dark',
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      protections: [
        {key: 'fiveG', enabled: true, label: '5G', description: '', list_image: fiveG, image: fiveG},
        {key: 'covid', enabled: false, label: 'Covid 19', description: '', list_image: covid19, image: covid19},
        {key: 'bad_eyes', enabled: true, label: 'Bad Eyes', description: '', list_image: bad_eyes, image: bad_eyes},
        {key: 'vegan', enabled: true, label: 'Vegan', description: 'Only vegan food', list_image: vegan, image: vegan},
        {key: 'bad_luck', enabled: false, label: 'Bad Luck', description: '', list_image: bad_luck, image: bad_luck},
        {key: 'energy_vampire', enabled: false, label: 'Energy Vampire', description: '', list_image: energy_vampire, image: energy_vampire},
        {key: 'vampire', enabled: false, label: 'Vampire', description: 'Real vampires', list_image: vampire, image: vampire},
        {key: 'train_crash', enabled: true, label: 'Train Crash', description: '', list_image: train_crash, image: train_crash},
        {key: 'airplane_crash', enabled: true, label: 'Airplane Crash', description: '', list_image: airplane_crash, image: airplane_crash},
      ]
    }
  }

  handleChange = (event, updatedItem) => {
    console.log(updatedItem);
    console.log(event.target.checked);
    updatedItem.enabled = !updatedItem.enabled;

    let protections = this.state.protections.map((item) => {
      return item.key === updatedItem.key? updatedItem: item;
    })

    this.setState({protections: protections});
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <header className="App-header">
              <Switch>
                <Route exact path="/">
                  <Status protections={this.state.protections}/>
                </Route>
                <Route path="/protections">
                  <Protections protections={this.state.protections} handleChange={this.handleChange}/>
                </Route>
              </Switch>
            </header>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
              <MainNavigation/>
            </Paper>

          </Router>

        </div>
      </ThemeProvider>
    );
  }
}


export default App;
