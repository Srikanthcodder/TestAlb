import BackButton from '@/components/BackButton';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { notificationService, type Notification } from '@/services';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, RefreshControl, SafeAreaView, StyleSheet, View } from 'react-native';

export default function NotificationsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const response = await notificationService.getAllNotifications();
      setNotifications(response.notifications || []);
    } catch (error) {
      Alert.alert('Error', 'Failed to load notifications. Please try again.');
      console.error('Failed to fetch notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchNotifications();
    setRefreshing(false);
  };

  const renderNotification = ({ item }: { item: Notification }) => (
    <View style={[styles.notificationCard, !item.read && styles.unreadCard]}>
      <View style={styles.notificationHeader}>
        <ThemedText style={styles.notificationTitle}>{item.title}</ThemedText>
        <ThemedText style={styles.notificationDate}>{new Date(item.date).toLocaleString()}</ThemedText>
      </View>
      <ThemedText style={styles.notificationMessage}>{item.message}</ThemedText>
      {!item.read && <View style={styles.unreadDot} />}
    </View>
  );

  if (loading && !refreshing) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <View style={styles.header}>
            <BackButton onPress={() => router.back()} />
            <ThemedText style={styles.headerTitle}>Notifications</ThemedText>
            <View style={styles.languageSelector}>
              <ThemedText style={styles.languageText}>EN</ThemedText>
              <ThemedText style={styles.languageArrow}>∨</ThemedText>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#E41E26" />
            <ThemedText style={styles.loadingText}>Loading notifications...</ThemedText>
          </View>
        </ThemedView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        <View style={styles.header}>
          <BackButton onPress={() => router.back()} />
          <ThemedText style={styles.headerTitle}>Notifications</ThemedText>
          <View style={styles.languageSelector}>
            <ThemedText style={styles.languageText}>EN</ThemedText>
            <ThemedText style={styles.languageArrow}>∨</ThemedText>
          </View>
        </View>

        <View style={styles.divider} />

        <FlatList
          data={notifications}
          renderItem={renderNotification}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#E41E26']} />
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <ThemedText style={styles.emptyText}>No notifications yet</ThemedText>
            </View>
          }
        />
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
    padding: 60,
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
    textAlign: 'center',
    marginLeft: -40, // Center the title by offsetting the back button width
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
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  listContent: {
    padding: 20,
    paddingTop: 10,
  },
  notificationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  notificationDate: {
    fontSize: 14,
    color: '#666666',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#000000',
  },
  unreadCard: {
    backgroundColor: '#FFF3F3',
    borderLeftWidth: 4,
    borderLeftColor: '#E41E26',
  },
  unreadDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E41E26',
  },
});
