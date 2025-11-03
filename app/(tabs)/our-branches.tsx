import BackButton from '@/components/BackButton';
import { branchService, type Branch } from '@/services';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

interface BranchCardProps {
  branch: Branch;
  onCallPress: () => void;
  onDirectionsPress: () => void;
}

const BranchCard = ({ branch, onCallPress, onDirectionsPress }: BranchCardProps) => (
  <View style={styles.branchCard}>
    <View style={styles.branchInfo}>
      <Text style={styles.branchName}>{branch.name}</Text>
      <Text style={styles.branchAddress}>{branch.address}</Text>
      <Text style={styles.branchPhone}>{branch.phone}</Text>
    </View>
    <View style={styles.branchActions}>
      <TouchableOpacity style={styles.actionButton} onPress={onCallPress}>
        <Text style={styles.actionButtonText}>📞 Call</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButton, styles.directionsButton]} onPress={onDirectionsPress}>
        <Text style={styles.actionButtonText}>🗺️ Directions</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function OurBranchesScreen() {
  const router = useRouter();
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchBranches();
  }, []);

  const fetchBranches = async () => {
    try {
      setLoading(true);
      const response = await branchService.getAllBranches();
      setBranches(response.branches || []);
    } catch (error) {
      Alert.alert('Error', 'Failed to load branches. Please try again.');
      console.error('Failed to fetch branches:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchBranches();
    setRefreshing(false);
  };

  const handleCall = (phone: string) => {
    const phoneUrl = `tel:${phone}`;
    Linking.openURL(phoneUrl);
  };

  const handleDirections = (latitude: number, longitude: number, name: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const openInGoogleMaps = () => {
    const url = 'https://www.google.com/maps/search/?api=1&query=29.3117,47.4818';
    Linking.openURL(url);
  };

  if (loading && !refreshing) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BackButton onPress={() => router.back()} />
          <Text style={styles.headerTitle}>Our Branches</Text>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.languageSelector}>
              <Text style={styles.languageText}>EN</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#E41E26" />
          <Text style={styles.loadingText}>Loading branches...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackButton onPress={() => router.back()} />

        <Text style={styles.headerTitle}>Our Branches</Text>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.languageSelector}>
            <Text style={styles.languageText}>EN</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#E41E26']} />
        }
      >
        {/* Map Placeholder */}
        <TouchableOpacity style={styles.mapContainer} onPress={openInGoogleMaps} activeOpacity={0.9}>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapIcon}>🗺️</Text>
            <Text style={styles.mapText}>Kuwait - All Branches</Text>
            <Text style={styles.mapSubtext}>Tap to open in Google Maps</Text>
            <View style={styles.markerContainer}>
              {branches.map((branch) => (
                <View key={branch.id} style={styles.marker}>
                  <Text style={styles.markerIcon}>📍</Text>
                  <Text style={styles.markerText}>{branch.name.split(' ')[0]}</Text>
                </View>
              ))}
            </View>
          </View>
        </TouchableOpacity>

        {/* Branch List */}
        <View style={styles.branchList}>
          <Text style={styles.sectionTitle}>All Branches</Text>
          {branches.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No branches available</Text>
            </View>
          ) : (
            branches.map((branch) => (
              <BranchCard
                key={branch.id}
                branch={branch}
                onCallPress={() => handleCall(branch.phone)}
                onDirectionsPress={() =>
                  handleDirections(
                    branch.coordinates.latitude,
                    branch.coordinates.longitude,
                    branch.name
                  )
                }
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  emptyContainer: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -14,
  },
  backIcon: {
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginLeft: -40,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  languageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E41E26',
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#E41E26',
  },
  content: {
    flex: 1,
  },
  mapContainer: {
    height: 300,
    marginBottom: 20,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mapIcon: {
    fontSize: 60,
    marginBottom: 10,
  },
  mapText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  mapSubtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  markerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 20,
  },
  marker: {
    alignItems: 'center',
  },
  markerIcon: {
    fontSize: 24,
  },
  markerText: {
    fontSize: 10,
    color: '#E41E26',
    fontWeight: 'bold',
  },
  branchList: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  branchCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  branchInfo: {
    marginBottom: 12,
  },
  branchName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E41E26',
    marginBottom: 8,
  },
  branchAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  branchPhone: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  branchActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#E41E26',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  directionsButton: {
    backgroundColor: '#4CAF50',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
