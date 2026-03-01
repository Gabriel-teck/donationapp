import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Payment from '../screens/Payment/Payment';
import Registration from '../screens/Registration/Registration';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';
import { Routes } from './Routes';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
      <Stack.Screen name={Routes.Payment} component={Payment} />
    </Stack.Navigator>
  );
};
