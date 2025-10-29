import BackButton from '@/components/BackButton';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
}

const notifications: Notification[] = [
  {
    id: '1',
    title: 'Registration',
    message: 'Successfully Registered',
    date: '24/10/2025, 11:09',
  },
  // Add more notifications here as needed
];

export default function NotificationsScreen() {
  const router = useRouter();

  const renderNotification = ({ item }: { item: Notification }) => (
    <View style={styles.notificationCard}>
      <View style={styles.notificationHeader}>
        <ThemedText style={styles.notificationTitle}>{item.title}</ThemedText>
        <ThemedText style={styles.notificationDate}>{item.date}</ThemedText>
      </View>
      <ThemedText style={styles.notificationMessage}>{item.message}</ThemedText>
    </View>
  );

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
});
