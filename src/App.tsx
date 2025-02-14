import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardHome from './pages/Dashboard/DashboardHome';
import CustomDrawerContent from './components/Dashboard/CustomDrawerContent';
import { enableScreens } from 'react-native-screens';

// Import other screens
import Users from './pages/Dashboard/Users';
import Products from './pages/Dashboard/Products';
import Reports from './pages/Dashboard/Reports';
import Settings from './pages/Dashboard/Settings';

enableScreens();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a237e',
          },
          headerTintColor: '#fff',
        }}
      >
        <Drawer.Screen name="Dashboard" component={DashboardHome} />
        <Drawer.Screen name="Users" component={Users} />
        <Drawer.Screen name="Products" component={Products} />
        <Drawer.Screen name="Reports" component={Reports} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App; 