import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import CustomDrawer from "../components/CustomDrawer";

/// SCREENS
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ReservationScreen from "../screens/ReservationScreen";
import MapScreen from "../screens/MapScreen";

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const ReservationNavigator = createStackNavigator(
  {
    Reservation: {
      screen: ReservationScreen
    }
  },
  {
    initialRouteName: "Reservation"
  }
);

const MapNavigator = createStackNavigator(
  {
    HotelMap: {
      screen: MapScreen
    }
  },
  {
    initialRouteName: "HotelMap"
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator
    },
    Reservation: {
      screen: ReservationNavigator
    },
    Map: {
      screen: MapNavigator
    }
  },
  {
    initialRouteName: "Reservation",
    drawerBackgroundColor: "rgba(255, 255, 255, 0.85)",
    hideStatusBar: true,
    statusBarAnimation: "slide",
    contentComponent: CustomDrawer,
    contentOptions: {
      activeTintColor: "#4B515D",
      labelStyle: {
        fontSize: 20,
        fontFamily: "Roboto-Light"
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);
