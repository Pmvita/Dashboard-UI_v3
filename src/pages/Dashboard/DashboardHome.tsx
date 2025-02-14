import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type StatCardProps = {
  title: string;
  value: string;
  icon: string;
  color: string;
};

const StatCard = ({ title, value, icon, color }: StatCardProps) => (
  <View style={[styles.card, { borderLeftColor: color }]}>
    <View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
    <View style={[styles.iconContainer, { backgroundColor: color }]}>
      <Icon name={icon} size={24} color="#fff" />
    </View>
  </View>
);

const DashboardHome = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <StatCard
            title="Total Sales"
            value="$23,456"
            icon="trending-up"
            color="#1a237e"
          />
        </View>
        <View style={styles.gridItem}>
          <StatCard
            title="Total Users"
            value="1,234"
            icon="people"
            color="#0277bd"
          />
        </View>
        <View style={styles.gridItem}>
          <StatCard
            title="Revenue"
            value="$12,345"
            icon="attach-money"
            color="#2e7d32"
          />
        </View>
        <View style={styles.gridItem}>
          <StatCard
            title="Orders"
            value="456"
            icon="shopping-cart"
            color="#c62828"
          />
        </View>
      </View>

      <View style={styles.activityCard}>
        <Text style={styles.activityTitle}>Recent Activity</Text>
        <Text style={styles.activityText}>Loading recent activities...</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  gridItem: {
    width: '50%',
    padding: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    color: '#666',
    fontSize: 14,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 20,
  },
  activityCard: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  activityText: {
    color: '#666',
  },
});

export default DashboardHome; 