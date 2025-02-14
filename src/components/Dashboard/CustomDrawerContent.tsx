import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const menuItems = [
  { text: 'Dashboard', icon: 'dashboard', path: 'Dashboard' },
  { text: 'Users', icon: 'people', path: 'Users' },
  { text: 'Products', icon: 'shopping-cart', path: 'Products' },
  { text: 'Reports', icon: 'assessment', path: 'Reports' },
  { text: 'Settings', icon: 'settings', path: 'Settings' },
];

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Admin Panel</Text>
      </View>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.text}
          style={styles.menuItem}
          onPress={() => props.navigation.navigate(item.path)}
        >
          <Icon name={item.icon} size={24} color="#fff" />
          <Text style={styles.menuText}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a237e',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  menuText: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 16,
  },
});

export default CustomDrawerContent; 