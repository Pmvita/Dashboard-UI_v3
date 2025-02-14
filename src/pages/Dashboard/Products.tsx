import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, DataTable, Searchbar, FAB, Chip } from 'react-native-paper';

const mockProducts = [
  { id: 1, name: 'Product A', category: 'Electronics', stock: 45, price: '$299.99', status: 'In Stock' },
  { id: 2, name: 'Product B', category: 'Clothing', stock: 12, price: '$59.99', status: 'Low Stock' },
  { id: 3, name: 'Product C', category: 'Electronics', stock: 0, price: '$199.99', status: 'Out of Stock' },
  // Add more mock products
];

const Products = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <Card style={styles.statsCard}>
        <Card.Content style={styles.statsContent}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1,234</Text>
            <Text style={styles.statLabel}>Total Products</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>$45.2K</Text>
            <Text style={styles.statLabel}>Revenue</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Low Stock</Text>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.tableCard}>
        <Card.Content>
          <Searchbar
            placeholder="Search products"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchbar}
          />
          
          <ScrollView>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Category</DataTable.Title>
                <DataTable.Title numeric>Stock</DataTable.Title>
                <DataTable.Title numeric>Price</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
              </DataTable.Header>

              {mockProducts.map((product) => (
                <DataTable.Row key={product.id}>
                  <DataTable.Cell>{product.name}</DataTable.Cell>
                  <DataTable.Cell>{product.category}</DataTable.Cell>
                  <DataTable.Cell numeric>{product.stock}</DataTable.Cell>
                  <DataTable.Cell numeric>{product.price}</DataTable.Cell>
                  <DataTable.Cell>
                    <Chip 
                      mode="outlined"
                      style={[
                        styles.statusChip,
                        { backgroundColor: getStatusColor(product.status) }
                      ]}
                    >
                      {product.status}
                    </Chip>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </ScrollView>
        </Card.Content>
      </Card>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => console.log('Add product')}
        label="Add Product"
      />
    </View>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'In Stock':
      return '#e8f5e9';
    case 'Low Stock':
      return '#fff3e0';
    case 'Out of Stock':
      return '#ffebee';
    default:
      return '#ffffff';
  }
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
  tableCard: {
    flex: 1,
  },
  searchbar: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  statusChip: {
    height: 24,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#1a237e',
  },
});

export default Products; 