import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Avatar, List, Divider, FAB } from 'react-native-paper';

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', lastActive: '2 hours ago' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', lastActive: '5 hours ago' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', lastActive: '1 day ago' },
  // Add more mock users as needed
];

const Users = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.statsCard}>
        <Card.Content style={styles.statsContent}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>256</Text>
            <Text style={styles.statLabel}>Total Users</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>New This Week</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Active Users</Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.listCard}>
        <Card.Title title="User List" subtitle="Manage your users" />
        <Card.Content>
          <ScrollView>
            {mockUsers.map((user) => (
              <React.Fragment key={user.id}>
                <List.Item
                  title={user.name}
                  description={user.email}
                  left={() => (
                    <Avatar.Text 
                      size={40} 
                      label={user.name.split(' ').map(n => n[0]).join('')} 
                    />
                  )}
                  right={() => (
                    <View style={styles.userInfo}>
                      <Text style={styles.roleText}>{user.role}</Text>
                      <Text style={styles.lastActiveText}>{user.lastActive}</Text>
                    </View>
                  )}
                />
                <Divider />
              </React.Fragment>
            ))}
          </ScrollView>
        </Card.Content>
      </Card>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => console.log('Add user')}
        label="Add User"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  statsCard: {
    marginBottom: 16,
  },
  statsContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a237e',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  listCard: {
    flex: 1,
  },
  userInfo: {
    alignItems: 'flex-end',
  },
  roleText: {
    fontSize: 12,
    color: '#1a237e',
    fontWeight: 'bold',
  },
  lastActiveText: {
    fontSize: 10,
    color: '#666',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#1a237e',
  },
});

export default Users; 