import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardHome from './pages/Dashboard/DashboardHome';
import CustomDrawerContent from './components/Dashboard/CustomDrawerContent';
import { enableScreens } from 'react-native-screens';

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
        {/* Add more screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App; 