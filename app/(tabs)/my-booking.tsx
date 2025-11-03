import CartIcon from '@/components/icons/CartIcon';
import NotificationIcon from '@/components/icons/NotificationIcon';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { images } from '@/constants/images';
import { Colors } from '@/constants/theme';
import { useCart } from '@/contexts/CartContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { bookingService, type Booking } from '@/services';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, RefreshControl, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function MyBookingScreen() {
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].text;
  const router = useRouter();
  const { getCartCount } = useCart();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');
  const [allBookings, setAllBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    filterBookings();
  }, [activeTab, allBookings]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await bookingService.getAllBookings();
      setAllBookings(response.bookings || []);
    } catch (error) {
      Alert.alert('Error', 'Failed to load bookings. Please try again.');
      console.error('Failed to fetch bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchBookings();
    setRefreshing(false);
  };

  const filterBookings = () => {
    const filtered = allBookings.filter(booking => booking.status === activeTab);
    setFilteredBookings(filtered);
  };

  const renderBookingCard = ({ item }: { item: Booking }) => (
    <View style={styles.bookingCard}>
      <View style={styles.bookingHeader}>
        <ThemedText style={styles.bookingId}>Booking #{item.id}</ThemedText>
        <View style={[
          styles.statusBadge,
          item.status === 'upcoming' && styles.upcomingBadge,
          item.status === 'completed' && styles.completedBadge,
          item.status === 'cancelled' && styles.cancelledBadge,
        ]}>
          <ThemedText style={styles.statusText}>{item.status.toUpperCase()}</ThemedText>
        </View>
      </View>

      <View style={styles.bookingDetails}>
        <ThemedText style={styles.serviceTitle}>{item.serviceName}</ThemedText>
        <ThemedText style={styles.packageName}>{item.packageName}</ThemedText>
        <View style={styles.detailRow}>
          <ThemedText style={styles.detailLabel}>Date:</ThemedText>
          <ThemedText style={styles.detailValue}>{new Date(item.scheduledDate).toLocaleDateString()}</ThemedText>
        </View>
        <View style={styles.detailRow}>
          <ThemedText style={styles.detailLabel}>Time:</ThemedText>
          <ThemedText style={styles.detailValue}>{item.scheduledTime}</ThemedText>
        </View>
        {item.vehicleInfo && (
          <View style={styles.detailRow}>
            <ThemedText style={styles.detailLabel}>Vehicle:</ThemedText>
            <ThemedText style={styles.detailValue}>{item.vehicleInfo.make} {item.vehicleInfo.model}</ThemedText>
          </View>
        )}
        {item.location && (
          <View style={styles.detailRow}>
            <ThemedText style={styles.detailLabel}>Location:</ThemedText>
            <ThemedText style={styles.detailValue} numberOfLines={1}>{item.location.address}</ThemedText>
          </View>
        )}
        <View style={styles.detailRow}>
          <ThemedText style={styles.detailLabel}>Total:</ThemedText>
          <ThemedText style={styles.priceValue}>KWD {item.price.toFixed(3)}</ThemedText>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={images.logo} style={styles.logo} />
          <View style={styles.headerIcons}>
            <View style={styles.languageSelector}>
              <ThemedText style={styles.languageText}>EN</ThemedText>
              <ThemedText style={styles.languageArrow}>∨</ThemedText>
            </View>
            <TouchableOpacity onPress={() => router.push('/cart')}>
              <CartIcon size={24} color={iconColor} />
              {getCartCount() > 0 && (
                <View style={styles.cartBadge}>
                  <ThemedText style={styles.cartBadgeText}>{getCartCount()}</ThemedText>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/notifications')}>
              <NotificationIcon size={24} color={iconColor} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
            onPress={() => setActiveTab('upcoming')}
          >
            <ThemedText style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>
              Upcoming
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'completed' && styles.activeTab]}
            onPress={() => setActiveTab('completed')}
          >
            <ThemedText style={[styles.tabText, activeTab === 'completed' && styles.activeTabText]}>
              Completed
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'cancelled' && styles.activeTab]}
            onPress={() => setActiveTab('cancelled')}
          >
            <ThemedText style={[styles.tabText, activeTab === 'cancelled' && styles.activeTabText]}>
              Cancelled
            </ThemedText>
          </TouchableOpacity>
        </View>

        {/* Content */}
        {loading && !refreshing ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#E41E26" />
            <ThemedText style={styles.loadingText}>Loading bookings...</ThemedText>
          </View>
        ) : (
          <FlatList
            data={filteredBookings}
            renderItem={renderBookingCard}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#E41E26']} />
            }
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <ThemedText style={styles.noDataText}>No {activeTab} bookings found</ThemedText>
              </View>
            }
          />
        )}
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 20,
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  languageText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ff0000',
  },
  languageArrow: {
    fontSize: 12,
    color: '#ff0000',
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: '#E41E26',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#ffffff',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#ff0000',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#999999',
  },
  activeTabText: {
    color: '#ff0000',
    fontWeight: '600',
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
  listContent: {
    padding: 20,
  },
  emptyContainer: {
    paddingVertical: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  bookingId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  upcomingBadge: {
    backgroundColor: '#E3F2FD',
  },
  completedBadge: {
    backgroundColor: '#E8F5E9',
  },
  cancelledBadge: {
    backgroundColor: '#FFEBEE',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  bookingDetails: {
    gap: 8,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E41E26',
    marginBottom: 4,
  },
  packageName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    flex: 1,
    textAlign: 'right',
  },
  priceValue: {
    fontSize: 16,
    color: '#E41E26',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  noDataText: {
    fontSize: 20,
    color: '#666666',
    fontWeight: '500',
  },
});
