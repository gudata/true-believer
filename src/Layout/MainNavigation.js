import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import { Link } from "react-router-dom";

import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from '@mui/icons-material/Restore';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled } from "@mui/material/styles";

// https://stackoverflow.com/questions/54375096/styling-bottomnavigation-in-react-js-material-ui/54375949?noredirect=1#comment122864123_54375949
const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color:'success.main';
  &.Mui-selected {
    color: red;
  }
`);

// const BottomNavigationAction = MuiBottomNavigationAction;


// function FixedBottomNavigation() {
//   const [value, setValue] = React.useState(0);

//   return (
//         <BottomNavigation
//           showLabels
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         >
//           <BottomNavigationAction label="Recents" icon={<FavoriteIcon />} />
//           <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//           <BottomNavigationAction label="Archive" icon={<FavoriteIcon />} />
//         </BottomNavigation>
//   );
// }


class MainNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
    this.setValue = this.setValue.bind(this);
  }

  setValue(newValue) {
    this.setState({value: newValue});

  }

  render() {
    return (
      <div>
        <BottomNavigation
          showLabels
          value={this.state.value}
          sx={{
            color: 'success.main',
          }}
          onChange={(event, newValue) => {
            this.setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Active Protections"
            icon={<FavoriteIcon />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Add more"
            icon={<AddCircleIcon />}
            component={Link}
            to="/protections"
          />
          {/* <BottomNavigationAction
            label="Luck Booster"
            icon={<AddCircleIcon />}
            component={Link}
            to="/luck_booster"
          />
          <BottomNavigationAction
            label="Wisdom" icon
            ={<AddCircleIcon />}
            component={Link}
            to="/wizdom"
          /> */}
        </BottomNavigation>
      </div>
    )
  }
}

export default MainNavigation;
